import { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export default function useLogin() {
  const [ user, setUser ] = useState()
  const [ fetched, setFetched ] = useState( false )

  // Initialize netlifyIdentity in a use effect,
  // as it refers to `document` and it would break
  // SSR compilation
  useEffect( () => {
    netlifyIdentity.init()
    netlifyIdentity.on( 'login', setUser )
    netlifyIdentity.on( 'logout', setUser )

    // Get the (maybe) already set user
    try {
      setUser( netlifyIdentity.currentUser() )
    } catch ( error ) {
      console.error( 'An error occurred while fetching currentUser', error )
      setUser( null )
    }

    setFetched( true )
  }, [] )

  return [ user, fetched, netlifyIdentity ]
}
