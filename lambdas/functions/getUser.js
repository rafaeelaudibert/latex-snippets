import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleCors, handleError, handleSuccess } from '../lib/response'

const query = gql`
  query findUser($id: String!) {
    findUserByIdNetlifyIdentity(idNetlifyIdentity: $id) {
      _id
      name
      email
      snippets {
        data {
          _id
          name
          content
          isPublic
        }        
      }
    }
  }
`

exports.handler = async( event, context ) => {
  const corsHandler = handleCors( event )
  if ( corsHandler ) {
    return corsHandler
  }

  try {
    const { id } = checkIsAuthenticated( context )
    const {
      data: { findUserByIdNetlifyIdentity: data }
    } = await graphQLClient.query( { query, variables: { id } } )

    return handleSuccess( data, data === null ? NOT_FOUND : OK )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
