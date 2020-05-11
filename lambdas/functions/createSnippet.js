import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleCors, handleError, handleSuccess } from '../lib/response'

const mutation = gql`
  mutation createSnippet($name: String!, $content: String!, $isPublic: Boolean!, $userId: ID){
    createSnippet(data: {
        name: $name
        content: $content
        isPublic: $isPublic
        user: { connect: $userId }
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
    const { id: userId } = checkIsAuthenticated( context )
    const { name, content, isPublic } = JSON.parse( event.body )

    const {
      data: { createSnippet: data }
    } = await graphQLClient.mutate( {
      mutation,
      variables: { name, content, isPublic, userId }
    } )

    return handleSuccess( data, OK )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
