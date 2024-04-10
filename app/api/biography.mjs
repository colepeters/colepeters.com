import cacheControl from '../lib/cache-control.mjs'

export async function get() {
  return {
    headers: {
      'cache-control': cacheControl,
    },
  }
}

