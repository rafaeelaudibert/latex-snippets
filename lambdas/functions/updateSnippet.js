import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleError, handleSuccess } from '../lib/response'

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
  try {
    checkIsAuthenticated( context )
    const { id, name, content, isPublic } = JSON.parse( event.body )

    const results = await graphQLClient.mutate( {
      mutation,
      variables: { id, name, content, isPublic }
    } )

    return handleSuccess( results, results.data.updateSnippet === null ? NOT_FOUND : OK )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
