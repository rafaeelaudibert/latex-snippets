import React, { useState } from 'react'
import { Box, Grommet, ResponsiveContext } from 'grommet'
import { CaretPrevious, Close } from 'grommet-icons'

import AppBar from '../components/AppBar'
import FloatingButton from '../components/FloatingButton'
import Sidebar from '../components/Sidebar'
import Theme from '../theme'

import useLogin from '../hooks/useLogin'

export default () => {
  const [ showSidebar, setShowSidebar ] = useState( false )
  const [ user, loginHandler ] = useLogin()

  return (
    <Grommet theme={Theme} full>
      <ResponsiveContext.Consumer>
        {screenSize => (
          <Box fill>
            <AppBar
              screenSize={screenSize}
              loginButtonAction={loginHandler.open}
              logoutButtonAction={loginHandler.logout}
              user={user}
            />
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
              app body
              </Box>
              <Sidebar
                showSidebar={showSidebar}
                screenSize={screenSize}
                onClose={() => setShowSidebar( false )}
              />
            </Box>
            {user && (
              <FloatingButton onClick={() => setShowSidebar( !showSidebar )}>
                {showSidebar ? <Close /> : <CaretPrevious />}
              </FloatingButton>
            ) }
          </Box> )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
