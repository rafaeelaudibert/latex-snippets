import { useContext } from 'react'
import { Box, Grommet, ResponsiveContext } from 'grommet'
import ClipLoader from 'react-spinners/ClipLoader'

import Theme from './theme'

import BackendProvider, { BackendContext } from './contexts/BackendContext'

const Loader = () => (
  <Box flex fill align='center' justify='center'>
    <ClipLoader
      size={30}
      color={Theme.global.colors.brand.dark}
      loading={true}
    />
  </Box>
)

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
