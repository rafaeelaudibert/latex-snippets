import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleCors, handleError, handleSuccess } from '../lib/response'

const mutation = gql`
  mutation deleteSnippet($id: ID!){
    deleteSnippet(id: $id) {
      _id
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
    const { id } = JSON.parse( event.body )

    const {
      data: { deleteSnippet: data }
    } = await graphQLClient.mutate( { mutation, variables: { id } } )

    return handleSuccess(
      data,
      data === null ? NOT_FOUND : OK
    )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
