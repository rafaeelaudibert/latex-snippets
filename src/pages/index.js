import Link from 'next/link'
import { useState, useContext } from 'react'
import { Box, Button } from 'grommet'

import Hero from '../components/IndexPage/Hero'
import LatexSamples from '../components/IndexPage/LatexSamples'
import Features from '../components/IndexPage/Features'
import LatexRenderer from '../components/Common/LatexRenderer'

import PageWrapper from '../components/Common/PageWrapper'

import { BackendContext } from '../contexts/BackendContext'

const IndexPage = () => {
  const [ text, setText ] = useState( '' )
  const {
    loginAction,
    user
  } = useContext( BackendContext )

  let CreateSnippetButton = null
  if ( text !== '' ) {
    CreateSnippetButton = user
      ? (
        <Box fill margin={{ bottom: 'xlarge' }}>
          <Link href={`/snippet?content=${text}`}>
            <Button
              primary
              label='Try saving this snippet!'
              alignSelf='center'
              align='center'
              size='large'
              data-cy='prompt-save-latex'
            />
          </Link>
        </Box>
      )
      : (
        <Box fill margin={{ bottom: 'xlarge' }}>
          <Button
            primary
            label='Wanna save this snippet? Please click here to login first!'
            alignSelf='center'
            align='center'
            onClick={async() => loginAction()}
            data-cy='prompt-login-latex'
          />
        </Box>
      )
  }

  return (
    <>
      <Hero/>
      <LatexRenderer tex={text} setTex={setText}/>
      { CreateSnippetButton }
      <LatexSamples setTex={setText}/>
      <Features/>
    </>
  )
}
export default () => {

  return (
    <PageWrapper>
      <IndexPage/>
    </PageWrapper>
  )
}
