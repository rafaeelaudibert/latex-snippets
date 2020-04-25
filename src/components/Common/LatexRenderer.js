import MathJax from 'react-mathjax2'
import { Box, Text, TextArea } from 'grommet'
import styled from 'styled-components'

const MinWidthBox = styled( Box )`
  min-width: 47%;
  margin: 1rem;

  @media screen and (max-width: 800px) {
    min-width: 90%;
  }
`

const BorderedBox = styled( Box )`
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.33);
  height: 200px;
`

const LatexOutput = ( { tex } ) => {
  return (
    <MinWidthBox>
      <Text weight='bold' color='dark-5'>Rendered LateX</Text>
      <BorderedBox align='center' justify='center' margin={{ vertical: 'xsmall' }}>
        <MathJax.Context input='tex'>
          <MathJax.Node>{tex}</MathJax.Node>
        </MathJax.Context>
      </BorderedBox>
    </MinWidthBox>
  )
}

const LatexInput = ( { tex, setTex } ) => {
  const NUM_ROWS = 8

  return (
    <MinWidthBox justify='center'>
      <Text weight='bold' color='dark-5'>Input</Text>
      <Box margin={{ vertical: 'xsmall' }}>
        <TextArea
          placeholder="Insert your TeX text here"
          resize={false}
          rows={NUM_ROWS}
          value={tex}
          onChange={event => setTex( event.target.value )}
        />
      </Box>
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
