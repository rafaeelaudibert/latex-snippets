import { useState } from 'react'

import LatexRenderer from '../components/Common/LatexRenderer'

import PageWrapper from '../components/Common/PageWrapper'

export default () => {
  const [ text, setText ] = useState( '' )

  return (
    <PageWrapper>
      <LatexRenderer tex={text} setTex={setText}/>
    </PageWrapper>
  )
}
