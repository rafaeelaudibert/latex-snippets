import { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export default function useNetlifyIdentity() {
  const [ user, setUser ] = useState()

  // Initialize netlifyIdentity in a use effect,
  // as it refers to `document` and it would break
  // SSR compilation
  useEffect( () => {
    netlifyIdentity.init()
    netlifyIdentity.on( 'login', setUser )
    netlifyIdentity.on( 'logout', setUser )

    // Get the already set user
    setUser( netlifyIdentity.currentUser() )
  }, [] )

  return [ user, netlifyIdentity ]
}
