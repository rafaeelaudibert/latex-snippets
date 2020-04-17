import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND, FORBIDDEN } from '../constants/statusHttp'
import { handleError, handleSuccess } from '../lib/response'
import checkIsAuthenticated from '../lib/auth'

const query = gql`
  query findSnippetByID($id: ID!) {
    findSnippetByID(id: $id) {
        _id
        name
        content
        isPublic
        user {          
          _id
          name
          email
        }
      }
    }
`

exports.handler = async( event, context ) => {
  try {
    let currentUserEmail = ''
    try {
      const currentUser = checkIsAuthenticated( context )
      currentUserEmail = currentUser.email
    } catch {
      // Die silently, as we only want the current user email
    }

    const { id } = JSON.parse( event.body )
    const results = await graphQLClient.query( { query, variables: { id } } )

    // If it doesn't exist it is a 404,
    // if it is not public, and the logged in user is not the owner of it, it is a 403
    const isSnippetPublic = results.data.findSnippetByID?.public
    const isSnippetFromThisUser = results.data.findSnippetByID?.user?.email === currentUserEmail //eslint-disable-line max-len
    if ( !results.data.findSnippetByID ) {
      return handleSuccess(
        results,
        NOT_FOUND
      )
    } else if ( !isSnippetPublic && !isSnippetFromThisUser ) {
      return handleSuccess(
        { },
        FORBIDDEN
      )
    }

    return handleSuccess(
      results,
      OK
    )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
