import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://colepeters.cdn.prismic.io/api/v2'
export const accessToken = process.env.PRISMIC_TOKEN

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
