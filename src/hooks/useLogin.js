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
    setUser( netlifyIdentity.currentUser() )
    setFetched( true )
  }, [] )

  return [ user, fetched, netlifyIdentity ]
}
