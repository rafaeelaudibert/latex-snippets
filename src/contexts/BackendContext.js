import React, { useState, useEffect } from 'react'
import useLogin from '../hooks/useLogin'
import { createSnippet, deleteSnippet, getSnippet, updateSnippet } from '../services/snippet.service'
import { getOrCreateUser } from '../services/user.service'

export const BackendContext = React.createContext( {} )

const BackendProvider = ( { children } ) => {
  const [ providerUser, loginHandler ] = useLogin()
  const [ user, setUser ] = useState( null )
  const [ isLoading, setIsLoading ] = useState( true )
  const [ error, setError ] = useState()

  // When the provider user changes, we fetch it from the api
  useEffect( () => {
    setTimeout( () => getOrCreateUser( providerUser )
      .then( setUser )
      .then( () => setIsLoading( false ) )
      .catch( setError ), 1500 ) //eslint-disable-line no-magic-numbers
  }, [ providerUser ] )

  return (
    <BackendContext.Provider
      value={{
        snippetApi: {
          createSnippet,
          deleteSnippet,
          getSnippet,
          updateSnippet,
        },
        loginAction: loginHandler.open,
        logoutAction: loginHandler.logout,
        error,
        isLoading,
        clearError: () => setError( null ),
        user
      }}
    >
      { children }
    </BackendContext.Provider>
  )
}


export default BackendProvider
