var env = `.env.${process.env.NODE_ENV}`;
console.log("ra thea >>>>> "+env);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful starter",
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'my-website-bucket',
          parama:{
            '': {'CacheControl': 'private, max-age=031536000'},
            '**/*.html': {'CacheControl': 'public, max-age=31536000'},
            '**.js': {'CacheControl': 'public, max-age=31536000'},
            'page-data/*.json': {'CacheControl': 'public, max-age=31536000'},
            'page-data/blog/page-data.json': {'CacheControl': 'public, max-age=31536000'},
         },
         mergeCachingParams: true,
      },
    },
  ],
};
