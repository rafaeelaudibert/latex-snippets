import { GET, POST } from './common'

const getUser = async( currentUser ) => {
  const response = await GET( 'getUser', currentUser )
  return response.statusCode === 200 ? response : null // eslint-disable-line no-magic-numbers
}

const createUser = ( currentUser ) => {
  return POST( 'createUser', {}, currentUser )
}

export const getOrCreateUser = async( currentUser ) => {
  let user = await getUser( currentUser )
  if ( user === null ) {
    user = await createUser( currentUser )
  }

  return user
}
