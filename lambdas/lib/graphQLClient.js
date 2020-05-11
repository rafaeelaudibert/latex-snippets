import fetch from 'node-fetch'
import { FAUNA_DB_SECRET, FAUNA_DB_URL } from '../config'

const request = ( query, variables ) => fetch(
  FAUNA_DB_URL,
  {
    body: JSON.stringify( { query, variables } ),
    headers: {
      authorization: `Bearer ${FAUNA_DB_SECRET}`
    },
    method: 'POST'
  }
).then( res => res.json() )


export default {
  query: ( { query, variables } ) => request( query, variables ),
  mutate: ( { mutation, variables } ) => request( mutation, variables )
}
