import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleCors, handleError, handleSuccess } from '../lib/response'

const mutation = gql`
  mutation updateSnippet($id: ID!, $name: String!, $content: String!, $isPublic: Boolean!){
    updateSnippet(
      id: $id,
      data: {
        name: $name
        content: $content
        isPublic: $isPublic
    }) {
      _id
      name
      content
      isPublic
    }
  }
`

exports.handler = async( event, context ) => {
  const corsHandler = handleCors( event )
  if ( corsHandler ) {
    return corsHandler
  }

  try {
    checkIsAuthenticated( context )
    const { _id, name, content, isPublic } = JSON.parse( event.body )

    const { data: { updateSnippet: data } } = await graphQLClient.mutate( {
      mutation,
      variables: { id: _id, name, content, isPublic }
    } )

    return handleSuccess( data, data === null ? NOT_FOUND : OK )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
