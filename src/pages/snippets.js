import { useState, useContext, useEffect } from 'react'

import PageWrapper from '../components/Common/PageWrapper'

import { BackendContext } from '../contexts/BackendContext'
import { ErrorContext } from '../contexts/ErrorContext'


const Snippets = () => {
  const [ snippets, setSnippets ] = useState( null )

  const { setUnauthorizedError } = useContext( ErrorContext )
  const { user } = useContext( BackendContext )

  useEffect( () => {
    if ( user ) {
      setSnippets( user.snippets.data )
    }
  }, [ user ] )

  // Can only access the snippets page if it is authenticated
  if ( !user ) {
    setUnauthorizedError()
  }

  return (
    'Snippets page body'
  )
}

const Page = () => (
  <PageWrapper>
    <Snippets/>
  </PageWrapper>
)

export default Page
