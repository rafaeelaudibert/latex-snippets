import { UNAUTHORIZED } from '../constants/statusHttp'

class AuthError extends Error {
  constructor( message ) {
    super( message )
    this.statusCode = UNAUTHORIZED
  }
}

export default function checkIsAuthenticated( context ) {
  const { user } = context.clientContext

  if ( !user ) {
    throw new AuthError( 'Usuário não autenticado' )
  }

  const { sub: id, email, user_metadata: { full_name: name } } = user

  return {
    email,
    id,
    name
  }
}
