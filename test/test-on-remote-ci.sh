#!/bin/bash
# Run end 2 end tests without polluting this repository

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  echo "Not a pull request, skipping e2e tests"
  exit 0
fi

# Prepare request body data
ENV="TEST_REPO=\\\"contentful/starter-gatsby-blog\\\" TEST_BRANCH="$TRAVIS_BRANCH" TEST_CMD_BUILD=\\\"sh ../tests/starter-gatsby-blog/build-repo.sh\\\" CYPRESS_BASE_URL=\\\"http://localhost:9000\\\" CYPRESS_INTEGRATION_FOLDER=\\\"tests/starter-gatsby-blog/integration\\\""

BODY="{
  \"request\": {
    \"message\": \"Starter Gatsby Blog Triggered Request\",
    \"branch\":\"travis\",
    \"config\": {\"env\": \"$ENV\"}
  }
}"

# Request new build
REQUEST="$(curl -s -X POST \
	-d "$BODY" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"   \
  -H "Travis-API-Version: 3"   \
  -H "Authorization: token $TRAVIS_E2E_TOKEN" \
  'https://api.travis-ci.org/repo/20489838/requests')"

REQUEST_ID="$(echo $REQUEST | jq '.request.id')"

if [ "$REQUEST_ID" == "null" ]; then
  echo "Unable to request CI build:"
  echo $REQUEST
  exit 1
fi

echo "Successfully started request $REQUEST_ID"
echo "See: https://travis-ci.org/contentful/starter-e2e-tests/builds"
echo "Starting to do a status check every minute..."
echo "Waiting 120s before doing status checks to avoid Travis API rate limits..."
sleep 60

# Try to detect a passed/failed CI run every 60 seconds for 15 times
for ((n=0;n<15;n++))
do
  sleep 60
  REQUEST_RESPONSE="$(curl -s \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"   \
  -H "Travis-API-Version: 3"   \
  -H "Authorization: token $TRAVIS_E2E_TOKEN" \
  "https://api.travis-ci.org/repo/20489838/request/$REQUEST_ID")"

  STATE="$(echo $REQUEST_RESPONSE | jq '.builds[].state')"

  echo "$(date +"%T") Current request status: $STATE"

  if [ "$STATE" == "\"passed\"" ]; then
    echo "\nTests passed"
    exit 0
  fi
  if [ "$STATE" == "\"failed\"" ]; then
    echo "\nTests failed"
    exit 1
  fi

  echo "Waiting 60s for another state check..."
done

echo "Remote CI did not finish testing within 10 minutes. Aborting."
exit 1
