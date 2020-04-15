import gql from 'graphql-tag'
import graphQLClient from '../lib/graphQLClient'
import { OK, INTERNAL_ERROR } from '../constants/statusHttp'

const queryBuilder = ( { idNetlifyIdentity } ) => gql`
  query {
    findUserByIdNetlifyIdentity(idNetlifyIdentity: "${idNetlifyIdentity}") {
      _id
      name
      email
      snippets {
        data {
          _id
          name
          content
        }        
      }
    }
  }
`

exports.handler = async( event, context, callback ) => {
  const { idNetlifyIdentity } = event.queryStringParameters
  const query = queryBuilder( { idNetlifyIdentity } )

  try {
    const results = await graphQLClient.query( {
      query
    } )

    callback( null, {
      statusCode: OK,
      body: JSON.stringify( results ),
    } )
  } catch ( error ) {
    callback( null, {
      statusCode: INTERNAL_ERROR,
      body: JSON.stringify( error.message ),
    } )
  }
}
