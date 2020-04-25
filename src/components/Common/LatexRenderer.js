import MathJax from 'react-mathjax2'
import { Box, TextArea } from 'grommet'
import styled from 'styled-components'

const MinWidthBox = styled( Box )`
  min-width: 47%;
  margin: 1rem;

  @media screen and (max-width: 800px) {
    min-width: 90%;
  }
`

const BorderedBox = styled( MinWidthBox )`
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.33);
  height: 200px;
`

const LatexOutput = ( { tex } ) => {
  return (
    <BorderedBox align='center' justify='center' margin={{ vertical: 'small' }}>
      <MathJax.Context input='tex'>
        <MathJax.Node>{tex}</MathJax.Node>
      </MathJax.Context>
    </BorderedBox>
  )
}

const LatexInput = ( { tex, setTex } ) => {
  const NUM_ROWS = 8

  return (
    <MinWidthBox align='center' justify='center'>
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
    <Box direction='row' justify='center' align='center' wrap={true} margin="small">
      <LatexInput tex={tex} setTex={setTex}/>
      <LatexOutput tex={tex}/>
    </Box>
  )
}
