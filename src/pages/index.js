import { useState } from 'react'

import Hero from '../components/IndexPage/Hero'
import LatexSamples from '../components/IndexPage/LatexSamples'
import Features from '../components/IndexPage/Features'
import LatexRenderer from '../components/Common/LatexRenderer'

import PageWrapper from '../components/Common/PageWrapper'

export default () => {
  const [ text, setText ] = useState( '' )

  return (
    <PageWrapper>
      <Hero/>
      <LatexRenderer tex={text} setTex={setText}/>
      <LatexSamples setTex={setText}/>
      <Features/>
    </PageWrapper>
  )
}
