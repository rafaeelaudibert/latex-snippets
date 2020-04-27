import { useState, useContext, useEffect } from 'react'

import PageWrapper from '../components/Common/PageWrapper'
import Loader from '../components/Common/Loader'

import { BackendContext } from '../contexts/BackendContext'
import { ErrorContext } from '../contexts/ErrorContext'

import { NOT_FOUND, FORBIDDEN } from '../constants/statusHttp'

const Snippet = ( { query: { id } } ) => {
  const [ snippet, setSnippet ] = useState( null )
  const [ loading, setLoading ] = useState( true )

  const { setNotFoundError, setUnauthorizedError } = useContext( ErrorContext )
  const {
    snippetApi: {
      getSnippet,
      updateSnippet,
      deleteSnippet
    }
  } = useContext( BackendContext )

  useEffect( () => {
    const getSnippetData = async() => {
      // TODO: Check what information needs to be added here,
      // so that we can know if there is no snippet, and we are creating a new one
      if ( !id ) {
        setLoading( false )
        setSnippet( {} )
      }

      const snippet = await getSnippet( { id } )

      if ( snippet.statusCode === NOT_FOUND ) {
        return setNotFoundError( { resource: 'snippet' } )
      } else if ( snippet.statusCode === FORBIDDEN ) {
        return setUnauthorizedError( { resource: 'snippet' } )
      }

      setLoading( false )
      setSnippet( snippet.data.findSnippetByID )
    }
    getSnippetData()
  }, [ id ] )

  if ( loading ) {
    return <Loader/>
  }

  return JSON.stringify( snippet )
}

const Page = ( { query } ) => (
  <PageWrapper>
    <Snippet query={query}/>
  </PageWrapper>
)

Page.getInitialProps = ( { query } ) => {
  return { query }
}

export default Page
