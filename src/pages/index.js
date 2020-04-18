import { useState } from 'react'
import { Box } from 'grommet'

import AppBar from '../components/Common/AppBar'
import IndexBody from '../components/Index/Body'

import ApplicationWrapper from '../wrapper'

export default () => {
  const [ showSidebar, setShowSidebar ] = useState( false )

  return (
    <ApplicationWrapper>
      <Box fill>
        <AppBar/>
        <IndexBody
          showSidebar={showSidebar}
          closeSidebar={() => setShowSidebar( false )}
          toggleSidebar={() => setShowSidebar( !showSidebar )}
        />
      </Box>
    </ApplicationWrapper>
  )
}
