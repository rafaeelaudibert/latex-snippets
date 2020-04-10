const ApolloClient = require( 'apollo-boost' )
const fetch = require( 'node-fetch' )
const config = require( '../config' )

const FAUNA_DB_SECRET = config.FAUNA_DB_SECRET
const FAUNA_DB_URL = 'https://graphql.fauna.com/graphql'

const client = new ApolloClient( {
  uri: FAUNA_DB_URL,
  fetch,
  request: operation => {
    operation.setContext( {
      headers: {
        authorization: `Bearer ${FAUNA_DB_SECRET}`
      },
    } )
  },
} )


module.exports = client
