import React, { useState } from 'react'

export const ErrorContext = React.createContext( {} )

const ErrorProvider = ( { children } ) => {
  const [ authError, setAuthError ] = useState( null )
  const [ notFoundError, setNotFoundError ] = useState( null )
  const [ unauthorizedError, setUnauthorizedError ] = useState( null )

  return (
    <ErrorContext.Provider
      value={{
        authError,
        setAuthError,
        notFoundError,
        setNotFoundError,
        unauthorizedError,
        setUnauthorizedError,
      }}
    >
      { children }
    </ErrorContext.Provider>
  )
}


export default ErrorProvider
