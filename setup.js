const axios = require('axios')
const spaceImport = require('contentful-import')
const { writeFileSync } = require('fs')
const path = require('path')
const chalk = require('chalk')

const argv = require('yargs-parser')(process.argv.slice(2))

const spaceId = argv.spaceId
const managementToken = argv.managementToken
const deliveryToken = argv.deliveryToken

// we need all 3 variables in order to set up user's space correctly
// spaceId and deliveryToken (CDA token) – to write into config file,
// and managementToken for contentful-import
if (!spaceId || !managementToken || !deliveryToken) {
  console.log('')
  console.log(
    `You have to provide ${chalk.yellow('spaceId')}, ${chalk.yellow(
      'managementToken'
    )} and ${chalk.yellow(
      'deliveryToken'
    )} arguments in order to set up your space correctly`
  )
  console.log(
    'Run: npm run setup -- --spaceId YOUR_SPACE --deliveryToken YOUR_CDA_KEY --managementToken YOUR_CMA_KEY '
  )
  console.log('')
  process.exit(1)
}

const REPO = 'contentful/content-models'
const TEMPLATE = 'blog'

// we attach to a specific tag, so we can be sure that this file exists
const tag = 'v0.0.14'

const url = `https://api.github.com/repos/${REPO}/contents/${TEMPLATE}/contentful-export.json?ref=${tag}`

const fileRequest = axios({
  url,
  headers: {
    // just get the raw JSON file
    // we don't need metadata
    // https://developer.github.com/v3/repos/contents/#custom-media-types
    Accept: 'application/vnd.github.3.raw',
  },
  responseType: 'json',
})

fileRequest.then(
  response => {
    saveConfigFile({ spaceId, deliveryToken })

    // we need to add promise handlers here, so we don't fall here from the
    // `catch` section.
    spaceImport({ spaceId, managementToken, content: response.data })
      .then(() => {
        console.log('')
        console.log(
          `All set! You can now run ${chalk.yellow(
            'npm run dev'
          )} to see it in action.`
        )
        console.log('')
      })
      .catch(error => console.error(error))
  },
  () => {
    // request failed – might be a network, might be a github issue.
    console.log(
      'Oops, something happened during fetching the template. Please try again later.'
    )
  }
)

// we need to write a config file with a provided credentials (space id and CDA token)
// so that `npm run dev` connects to your space.
function saveConfigFile({ spaceId, deliveryToken }) {
  const configFilePath = path.resolve(__dirname, '.contentful.json')
  console.log('')
  console.log('Writing config file...')
  console.log('')
  writeFileSync(
    configFilePath,
    JSON.stringify(
      {
        spaceId,
        accessToken: deliveryToken,
      },
      null,
      2
    )
  )

  console.log(`Config file ${chalk.yellow(configFilePath)} written`)
  console.log('')
}
