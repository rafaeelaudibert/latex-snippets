const BASE_PATH = 'https://localhost:9000/'

const getToken = async( currentUser ) => {
  if ( !currentUser ) {
    return ''
  }

  // fetchs new JWT token only if expired
  await currentUser.jwt()
  return currentUser.token.access_token
}

export const GET = async( endpoint, currentUser ) => {
  const token = await getToken( currentUser )
  const headers = { Authorization: `Bearer ${token}` }

  return fetch( `${BASE_PATH}${endpoint}`, { headers } ).then( data => data.json() )
}

export const POST = async( endpoint, body, currentUser ) => {
  const token = await getToken()
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  return fetch(
      `${BASE_PATH}${endpoint}`,
      {
        body: JSON.stringify( body ),
        headers,
        method: 'POST'
      }
  ).then( data => data.json() )
}
