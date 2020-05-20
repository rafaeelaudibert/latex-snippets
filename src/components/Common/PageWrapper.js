import { useState, useContext } from 'react'
import { Anchor, Box, Footer, ResponsiveContext, Text } from 'grommet'
import Link from 'next/link'
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

  const initialYear = 2020
  const currentYear = new Date().getFullYear()
  const isInitialYear = initialYear === currentYear
  const textYearCopyright = isInitialYear ? initialYear : `${initialYear} - ${currentYear}`

  return (
    <Box>
      <AppBar/>
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box fill>
          {children}
        </Box>
        <Sidebar
          showSidebar={showSidebar}
          screenSize={screenSize}
          onClickClose={() => setShowSidebar( false )}
        />
        {user && (
          <FloatingButton onClick={() => setShowSidebar( !showSidebar )} data-cy='floating-button'>
            {showSidebar ? <Close /> : <CaretPrevious />}
          </FloatingButton>
        ) }
      </Box>

      <Footer background="brand" pad="medium" justify="between" data-cy='footer'>
        <Box direction="row" fill justify="start">
          <Anchor href='https://github.com/rafaeelaudibert/LatexSnippets' margin={{ horizontal: 'small' }} label="Github" color="dark-1" data-cy='github-anchor'/>
          <Anchor href='mailto:rafaeelaudibert+latexsnippets@gmail.com' margin={{ horizontal: 'small' }} label="Contact" color="dark-1" data-cy='contact-anchor'/>
        </Box>
        <Box justify="end" width="medium">
          <Text size="small" textAlign="end">Copyright RafaAudibert {textYearCopyright}</Text>
        </Box>
      </Footer>
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
