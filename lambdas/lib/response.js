import { INTERNAL_ERROR, OK } from '../constants/statusHttp'

export const handleCors = ( event ) => {
  if ( process.env.ENABLE_CORS && event.httpMethod === 'OPTIONS' ) {
    return {
      statusCode: OK,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Authorization, Origin, X-Requested-With, Content-Type, Accept',
      },
      body: JSON.stringify( { message: 'You can use CORS locally normally now' } ),
    }
  }

  return null
}

export const handleSuccess = ( data, statusCode ) => {
  return {
    body: JSON.stringify( { ...data, statusCode } ),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    statusCode
  }
}

export const handleError = error => {
  const statusCode = error.statusCode || INTERNAL_ERROR
  return {
    body: JSON.stringify( { error: error.message, statusCode } ),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    statusCode
  }
}
