import { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import Sidebar from '../Common/Sidebar'
import { ApiContext } from '../../contexts/apiContext'

export default ( { showSidebar, closeSidebar } ) => {
  const screenSize = useContext( ResponsiveContext )
  const { user } = useContext( ApiContext )

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
        <FloatingButton onClick={() => setShowSidebar( !showSidebar )}>
          {showSidebar ? <Close /> : <CaretPrevious />}
        </FloatingButton>
      ) }
    </Box>
  )
}
