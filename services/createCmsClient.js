const createCmsClient = () =>
  require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  })

export default createCmsClient
