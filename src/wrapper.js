import { Grommet, ResponsiveContext } from 'grommet'

import Theme from '../theme'

import ApiProvider from '../contexts/ApiContext'

export default ( { children } ) => (
  <ApiProvider>
    <Grommet theme={Theme} full>
      <ResponsiveContext.Provider>
        {children}
      </ResponsiveContext.Provider>
    </Grommet>
  </ApiProvider>
)
