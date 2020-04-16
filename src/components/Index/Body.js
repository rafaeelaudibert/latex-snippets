import { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import Sidebar from '../Common/Sidebar'

export default ( { showSidebar, closeSidebar } ) => {
  const screenSize = useContext( ResponsiveContext )

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
    </Box>
  )
}
