import { useState, useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { CaretPrevious, Close } from 'grommet-icons'

import Sidebar from './Sidebar'
import FloatingButton from './FloatingButton'
import AppBar from './AppBar'

import ApplicationWrapper from '../../wrapper'

import { BackendContext } from '../../contexts/BackendContext'

const PageWrapper = ( { children } ) => {
  const [ showSidebar, setShowSidebar ] = useState( false )

  const { user } = useContext( BackendContext )
  const screenSize = useContext( ResponsiveContext )

  return (
    <Box fill>
      <AppBar/>
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex pad={'large'}>
          {children}
        </Box>
        <Sidebar
          showSidebar={showSidebar}
          screenSize={screenSize}
          onClickClose={() => setShowSidebar( false )}
        />
        {user && (
          <FloatingButton onClick={() => setShowSidebar( !showSidebar )}>
            {showSidebar ? <Close /> : <CaretPrevious />}
          </FloatingButton>
        ) }
      </Box>
    </Box>
  )
}

export default ( { children } ) => (
  <ApplicationWrapper>
    <PageWrapper>
      {children}
    </PageWrapper>
  </ApplicationWrapper>

)
