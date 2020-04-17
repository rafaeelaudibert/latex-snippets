import { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { CaretPrevious, Close } from 'grommet-icons'

import Sidebar from '../Common/Sidebar'
import FloatingButton from '../Common/FloatingButton'
import { BackendContext } from '../../contexts/BackendContext'

export default ( { showSidebar, closeSidebar, toggleSidebar } ) => {
  const screenSize = useContext( ResponsiveContext )
  const { user } = useContext( BackendContext )

  return (
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align='center' justify='center'>
        app body
      </Box>
      <Sidebar
        showSidebar={showSidebar}
        screenSize={screenSize}
        onClickClose={closeSidebar}
      />
      {user && (
        <FloatingButton onClick={toggleSidebar}>
          {showSidebar ? <Close /> : <CaretPrevious />}
        </FloatingButton>
      ) }
    </Box>
  )
}
