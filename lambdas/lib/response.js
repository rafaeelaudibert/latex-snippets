import { INTERNAL_ERROR } from '../constants/statusHttp'

export const handleSuccess = ( data, statusCode ) => {
  return {
    body: JSON.stringify( { ...data, statusCode } ),
    statusCode
  }
}

export const handleError = error => {
  const statusCode = error.statusCode || INTERNAL_ERROR
  return {
    body: JSON.stringify( { error: error.message, statusCode } ),
    statusCode
  }
}
