import { useContext } from 'react'
import { Grommet, ResponsiveContext } from 'grommet'
import Loader from './components/Common/Loader'
import Theme from './theme'

import BackendProvider, { BackendContext } from './contexts/BackendContext'

const InnerWrapper = ( { children } ) => {
  const { isLoading } = useContext( BackendContext )
  return isLoading ? <Loader/> : children
}

const OuterWrapper = ( { children } ) => (
  <BackendProvider>
    <Grommet theme={Theme} full>
      <ResponsiveContext.Provider>
        {children}
      </ResponsiveContext.Provider>
    </Grommet>
  </BackendProvider>
)

export default ( { children } ) => (
  <OuterWrapper>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </OuterWrapper>
)
