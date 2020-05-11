import { useState, useContext, useEffect } from 'react'
import { Box, Button, Grid, Heading, Image, Paragraph, ResponsiveContext } from 'grommet'
import Link from 'next/link'

import PageWrapper from '../components/Common/PageWrapper'
import SnippetsCard from '../components/SnippetsPage/SnippetsCard'

import { BackendContext } from '../contexts/BackendContext'
import { ErrorContext } from '../contexts/ErrorContext'

import noDataSvg from '../images/noData.svg'

const NoSnippets = () => (
  <Box
    fill='vertical'
    margin='large'
    alignSelf='center'
    align='center'
    justify='center'
    width={'medium'}
  >
    <Image
      fill
      src={noDataSvg}
      alt={'No snippets found'}
    />
    <Heading level='2'>Oops!</Heading>
    <Paragraph textAlign='center'>
        You haven't created any snippet yet. You can create one clicking in the button below
    </Paragraph>
    <Link href={'/snippet'}>
      <Button label='Create snippet'/>
    </Link>
  </Box>
)

const Snippets = () => {
  const [ snippets, setSnippets ] = useState( null )

  const { setUnauthorizedError } = useContext( ErrorContext )
  const { user } = useContext( BackendContext )
  const screenSize = useContext( ResponsiveContext )

  useEffect( () => {
    if ( user ) {
      setSnippets( user.snippets.data )
    }
  }, [ user ] )

  // Can only access the snippets page if it is authenticated
  if ( !user ) {
    return setUnauthorizedError( { resource: 'page' } )
  }

  if ( !snippets?.length ) {
    return <NoSnippets/>
  }

  const columnsPerScreenSize = {
    medium: [ '1/2', '1/2' ],
    large: [ '1/3', '1/3', '1/3' ]
  }[ screenSize ] || [ 'full' ]

  return (
    <Grid
      columns={columnsPerScreenSize}
      gap='xsmall'
      align='start'
      justify='start'
      justifyContent='start'
      margin='medium'
    >
      {snippets.map( ( snippet ) => (
        <SnippetsCard
          key={snippet._id}
          content={snippet.content}
          name={snippet.name}
          isPublic={snippet.isPublic}
        />
      ) )}
    </Grid>
  )
}

const Page = () => (
  <PageWrapper>
    <Snippets/>
  </PageWrapper>
)

export default Page
