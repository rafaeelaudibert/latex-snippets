import { useState } from 'react'
import { Box } from 'grommet'
import { CaretPrevious, Close } from 'grommet-icons'

import AppBar from '../components/Common/AppBar'
import FloatingButton from '../components/Common/FloatingButton'
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
        />
      </Box>
    </ApplicationWrapper>
  )
}
