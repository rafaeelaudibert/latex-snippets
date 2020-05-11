import { GET, POST } from './common.service'
import { OK } from '../constants/statusHttp'

const getUser = async( currentUser ) => {
  const response = await GET( 'getUser', currentUser )
  return response.statusCode === OK ? response : null
}

const createUser = ( currentUser ) => {
  return POST( 'createUser', {}, currentUser )
}

export const getOrCreateUser = async( currentUser ) => {
  if ( !currentUser ) {
    return null
  }

  let user = await getUser( currentUser )
  if ( user === null ) {
    user = await createUser( currentUser )
  }

  return user
}
