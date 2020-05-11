import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { Box, Button, CheckBox, Text } from 'grommet'

import PageWrapper from '../components/Common/PageWrapper'
import Loader from '../components/Common/Loader'
import EditableField from '../components/Common/EditableField'
import LatexRenderer from '../components/Common/LatexRenderer'
import ClipboardButton from '../components/Common/ClipboardButton'

import { BackendContext } from '../contexts/BackendContext'
import { ErrorContext } from '../contexts/ErrorContext'

import { NOT_FOUND, FORBIDDEN } from '../constants/statusHttp'

const PaddedText = styled( Text )`
  padding-left: 2.5rem;
`

const Snippet = ( { query: { id: snippetQueryId, content: snippetQueryContent='' } } ) => {
  const [ snippet, setSnippet ] = useState( {} )
  const [ loading, setLoading ] = useState( true )
  const [ isSaving, setIsSaving ] = useState( false )
  const [ hasChanged, setHasChanged ] = useState( false )

  const { setNotFoundError, setUnauthorizedError } = useContext( ErrorContext )
  const {
    snippetApi: {
      createSnippet,
      getSnippet,
      updateSnippet
    },
    providerUser,
    user
  } = useContext( BackendContext )

  const EMPTY_SNIPPET = () => ( {
    _id: null,
    name: '',
    content: snippetQueryContent,
    isPublic: true,
    user: {
      _id: user?._id,
      name: user?.name,
      email: user?.email
    }
  } )

  useEffect( () => {
    const getSnippetData = async() => {
      if ( !snippetQueryId ) {

        // Can only access the snippet new page if it is authenticated
        if ( !user ) {
          return setUnauthorizedError( { resource: 'snippet' } )
        }

        setLoading( false )
        setSnippet( EMPTY_SNIPPET() )
        return
      }

      const snippet = await getSnippet( { _id: snippetQueryId }, providerUser )

      if ( snippet.statusCode === NOT_FOUND ) {
        return setNotFoundError( { resource: 'snippet' } )
      } else if ( snippet.statusCode === FORBIDDEN ) {
        return setUnauthorizedError( { resource: 'snippet' } )
      }

      setTimeout( () => setLoading( false ), 50 ) // eslint-disable-line no-magic-numbers
      setSnippet( snippet.data )
    }
    getSnippetData()
  }, [ snippetQueryId, user?.email ] )

  const handleSubmission = async() => {
    setIsSaving( true )
    const { data: { _id } } = snippet._id ?
      await updateSnippet( snippet, providerUser ) :
      await createSnippet( snippet, providerUser )

    setSnippet( { ...snippet, _id } )
    setIsSaving( false )
    setHasChanged( false )
  }

  if ( loading ) {
    return <Loader/>
  }

  const isSnippetFromLoggedUser = snippet?.user?._id == user?._id
  return (
    <Box pad='large' fill='vertical' justify='center'>
      <EditableField
        setText={value => {
          setSnippet( { ...snippet, name: value } )
          setHasChanged( true )
        }}
        text={snippet.name}
        placeholder="Snippet name"
        name="name"
        editable={isSnippetFromLoggedUser}
        startEditable={snippet.name === ''}
        textWeight='bold'
        textSize='xlarge'
        textColor='dark-1'
      />

      <PaddedText size='small'>
          Author: {snippet.user.name}
      </PaddedText>

      {
        isSnippetFromLoggedUser && (
          <Box margin={{ top: 'medium' }}>
            <PaddedText size='small'>
              <CheckBox
                checked={snippet.isPublic}
                label="Public"
                onChange={( event ) => {
                  setSnippet( { ...snippet, isPublic: event.target.checked } )
                  setHasChanged( true )
                }}
              />
            </PaddedText>
          </Box>
        )
      }


      <LatexRenderer
        editable={isSnippetFromLoggedUser}
        tex={snippet.content}
        setTex={value => {
          setSnippet( { ...snippet, content: value } )
          setHasChanged( true )
        }}
        showLabel={false}
      />

      <Box fill direction='row' justify='end' pad={{ right: 'medium' }}>
        <ClipboardButton
          buttonText='Copy shareable link'
          text={`${window.location.origin}/snippet?id=${snippet._id}`}
          margin='xsmall'
          disabled={!snippet?._id}
          primary={false}
          color='accent-1'
        />
        {
          isSnippetFromLoggedUser && <Button
            primary
            color='brand'
            label={isSaving ? 'Saving...' : hasChanged ? 'Save' : 'Saved'}
            margin='xsmall'
            disabled={isSaving || !hasChanged}
            onClick={handleSubmission}
          />
        }
      </Box>
    </Box>
  )
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
