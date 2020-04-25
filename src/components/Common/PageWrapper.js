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
          <FloatingButton onClick={() => setShowSidebar( !showSidebar )}>
            {showSidebar ? <Close /> : <CaretPrevious />}
          </FloatingButton>
        ) }
      </Box>

      <Footer background="brand" pad="medium" justify="between">
        <Box direction="row" fill justify="start">
          <Link href='/faq'>
            <Anchor margin={{ horizontal: 'small' }} label="FAQ" color="dark-1"/>
          </Link>
          <Anchor href='https://github.com/rafaeelaudibert/latex-snippets' margin={{ horizontal: 'small' }} label="Github" color="dark-1"/>
          <Anchor href='mailto:rafaeelaudibert@gmail.com' margin={{ horizontal: 'small' }} label="Contact" color="dark-1"/>
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
