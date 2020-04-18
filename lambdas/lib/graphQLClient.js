import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'
import { FAUNA_DB_SECRET, FAUNA_DB_URL } from '../config'

const client = new ApolloClient( {
  uri: FAUNA_DB_URL,
  fetch,
  query: {
    fetchPolicy: 'no-cache',
  },
  mutation: {
    fetchPolicy: 'no-cache',
  },
  request: operation => {
    operation.setContext( {
      headers: {
        authorization: `Bearer ${FAUNA_DB_SECRET}`
      },
    } )
  },
} )


export default client
