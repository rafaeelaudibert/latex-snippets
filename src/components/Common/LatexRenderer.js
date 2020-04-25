import MathJax from 'react-mathjax2'
import { Box, TextArea } from 'grommet'
import styled from 'styled-components'

const MinWidthBox = styled( Box )`
  min-width: 50%;
  padding: 1rem;

  @media screen and (max-width: 650px) {
    min-width: 90%;
  }
`

const BorderedBox = styled( MinWidthBox )`
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.33)
`

const LatexOutput = ( { tex='' } ) => {
  return (
    <MinWidthBox fill='vertical' pad={{ vertical: 'large' }}>
      <BorderedBox fill='vertical' align='center' justify='center'>
        <MathJax.Context input='tex'>
          <MathJax.Node>{tex}</MathJax.Node>
        </MathJax.Context>
      </BorderedBox>
    </MinWidthBox>
  )
}

const LatexInput = ( { tex, setTex } ) => {
  const NUM_ROWS = 5

  return (
    <MinWidthBox fill='vertical' align='center' justify='center'>
      <TextArea
        placeholder="Insert your TeX text here"
        resize={false}
        rows={NUM_ROWS}
        value={tex}
        onChange={event => setTex( event.target.value )}
      />
    </MinWidthBox>
  )
}

export default ( { tex: tex, setTex } ) => {
  return (
    <Box direction='row' justify='center' align='center' wrap={true}>
      <LatexInput tex={tex} setTex={setTex}/>
      <LatexOutput tex={tex}/>
    </Box>
  )
}
