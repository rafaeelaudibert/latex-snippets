import { Grommet, ResponsiveContext } from 'grommet'

import Theme from './theme'

import BackendProvider from './contexts/BackendContext'

export default ( { children } ) => (
  <BackendProvider>
    <Grommet theme={Theme} full>
      <ResponsiveContext.Provider>
        {children}
      </ResponsiveContext.Provider>
    </Grommet>
  </BackendProvider>
)
