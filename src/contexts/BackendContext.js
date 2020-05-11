import React, { useState, useEffect, useContext } from 'react'
import useLogin from '../hooks/useLogin'
import {
  createSnippet,
  deleteSnippet,
  getSnippet,
  updateSnippet
} from '../services/snippet.service'
import { getOrCreateUser } from '../services/user.service'
import { ErrorContext } from './ErrorContext'


export const BackendContext = React.createContext( {} )

const BackendProvider = ( { children } ) => {
  const [ providerUser, isUserReady, loginHandler ] = useLogin()

  const [ user, setUser ] = useState( null )
  const [ isLoading, setIsLoading ] = useState( true )

  const { setAuthError } = useContext( ErrorContext )

  // When the provider user changes, we fetch it from the api
  useEffect( () => {
    if ( isUserReady ) {
      getOrCreateUser( providerUser )
        .then( user => setUser( user?.data ) )
        .then( () => setIsLoading( false ) )
        .catch( error => setAuthError( { error: error.stack.toString() } ) )
    }
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
        isLoading,
        providerUser,
        user
      }}
    >
      { children }
    </BackendContext.Provider>
  )
}


export default BackendProvider
