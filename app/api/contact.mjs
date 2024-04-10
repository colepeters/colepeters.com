export async function get(req) {
  const { session } = req

  return {
    json: {
      mailstatus: session?.mailstatus || null
    },
    session: {},
  }
}

