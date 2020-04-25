import { useContext } from 'react'
import { Grommet } from 'grommet'
import Loader from './components/Common/Loader'
import Theme from './theme'

import AuthError from './components/Errors/AuthError'
import NotFoundError from './components/Errors/NotFound'
import UnauthorizedError from './components/Errors/Unauthorized'

import BackendProvider, { BackendContext } from './contexts/BackendContext'
import ErrorProvider, { ErrorContext } from './contexts/ErrorContext'

const InnerWrapper = ( { children } ) => {
  const { isLoading } = useContext( BackendContext )
  const { authError, notFoundError, unauthorizedError } = useContext( ErrorContext )

  // Full page error handling
  if ( authError ) {
    return <AuthError {...authError}/>
  }

  if ( notFoundError ) {
    return <NotFoundError {...notFoundError}/>
  }

  if ( unauthorizedError ) {
    return <UnauthorizedError {...unauthorizedError}/>
  }


  // Check for loading full page screen
  if ( isLoading ) {
    return <Loader/>
  }

  return children
}

const OuterWrapper = ( { children } ) => (
  <ErrorProvider>
    <BackendProvider>
      <Grommet theme={Theme} full>
        {children}
      </Grommet>
    </BackendProvider>
  </ErrorProvider>
)

export default ( { children } ) => (
  <OuterWrapper>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </OuterWrapper>
)
