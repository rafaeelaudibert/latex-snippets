import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleCors, handleError, handleSuccess } from '../lib/response'

const mutation = gql`
  mutation createUser($id: String!, $name: String!, $email: String!){
    createUser(data: {
        idNetlifyIdentity: $id 
        name: $name
        email: $email
    }) {
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
    const { id, name, email } = checkIsAuthenticated( context )

    const results = await graphQLClient.mutate( { mutation, variables: { id, name, email } } )

    return handleSuccess( results, OK )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
