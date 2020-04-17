import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND } from '../constants/statusHttp'
import checkIsAuthenticated from '../lib/auth'
import { handleError, handleSuccess } from '../lib/response'

const mutation = gql`
  mutation deleteSnippet($id: ID!){
    deleteSnippet(id: $id) {
      _id
    }
  }
`

exports.handler = async( event, context ) => {
  try {
    checkIsAuthenticated( context )
    const { id } = JSON.parse( event.body )

    const results = await graphQLClient.mutate( { mutation, variables: { id } } )

    return handleSuccess( results, results.data.deleteSnippet === null ? NOT_FOUND : OK )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
