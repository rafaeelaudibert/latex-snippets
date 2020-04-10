const gql = require( 'graphql-tag' )
const graphQLClient = require( '../lib/graphQLClient' )
const STATUS_HTTP = require( '../constants/statusHttp' )

const query = gql ``

exports.handler = async( event, context, callback ) => {
  try {
    const results = await graphQLClient.query( {
      query
    } )
    callback( null, {
      statusCode: STATUS_HTTP.OK,
      body: JSON.stringify( results ),
    } )
  } catch ( error ) {
    callback( error )
  }
}
