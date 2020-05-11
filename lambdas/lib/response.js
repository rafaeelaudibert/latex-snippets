/* eslint-disable no-console */
import { INTERNAL_ERROR, OK } from '../constants/statusHttp'

export const handleCors = ( event ) => {
  if ( process.env.ENABLE_CORS && event.httpMethod === 'OPTIONS' ) {
    return {
      statusCode: OK,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Authorization, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': '*'
      },
      body: JSON.stringify( { message: 'You can use CORS locally normally now' } ),
    }
  }

  return null
}

export const handleSuccess = ( data, statusCode ) => {
  const response = {
    body: JSON.stringify( { data, statusCode } ),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    statusCode
  }

  console.log( '[SUCCESS]', response )
  return response
}

export const handleError = error => {
  const statusCode = error.statusCode || INTERNAL_ERROR
  const errorResponse = {
    body: JSON.stringify( { error: error.message, statusCode } ),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    statusCode
  }

  console.log( '[ERROR]', errorResponse )
  return errorResponse
}
