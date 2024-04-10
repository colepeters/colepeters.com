const cacheControl = process.env.ARC_ENV === 'production'
  ? 'max-age=1800;'
  : 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'

export default cacheControl
