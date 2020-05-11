import graphQLClient from '../lib/graphQLClient'
import { OK, NOT_FOUND, FORBIDDEN } from '../constants/statusHttp'
import { handleCors, handleError, handleSuccess } from '../lib/response'
import checkIsAuthenticated from '../lib/auth'

const query = `
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
  const corsHandler = handleCors( event )
  if ( corsHandler ) {
    return corsHandler
  }

  try {
    let currentUserEmail = ''
    try {
      const currentUser = checkIsAuthenticated( context )
      currentUserEmail = currentUser.email
    } catch {
      // Die silently, as we only want the current user email
    }

    const { id } = event.queryStringParameters
    const {
      data: { findSnippetByID: data }
    } = await graphQLClient.query( { query, variables: { id } } )

    // If it doesn't exist it is a 404,
    // if it is not public, and the logged in user is not the owner of it, it is a 403
    const isSnippetPublic = data?.isPublic
    const isSnippetFromThisUser = data?.user?.email === currentUserEmail

    const wasNotFound = data === null
    const isSnippetAccessible = isSnippetPublic || isSnippetFromThisUser

    console.log( { isSnippetPublic, isSnippetFromThisUser, wasNotFound, isSnippetAccessible } ) // eslint-disable-line no-console
    return handleSuccess(
      data,
      isSnippetAccessible ?
        OK :
        wasNotFound ?
          NOT_FOUND :
          FORBIDDEN
    )
  } catch ( error ) {
    console.error( 'An error ocurred: ', error )

    return handleError( error )
  }
}
