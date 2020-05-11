import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'
import { FAUNA_DB_SECRET, FAUNA_DB_URL } from '../config'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient( {
  uri: FAUNA_DB_URL,
  fetch,
  defaultOptions,
  request: operation => {
    operation.setContext( {
      headers: {
        authorization: `Bearer ${FAUNA_DB_SECRET}`
      },
    } )
  },
} )


export default client
