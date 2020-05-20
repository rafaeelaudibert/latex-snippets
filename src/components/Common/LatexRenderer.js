import MathJax from 'react-mathjax2'
import { Box, Text, TextArea } from 'grommet'
import styled from 'styled-components'

const MinWidthBox = styled( Box )`
  min-width: 47%;
  margin: 0.5rem;

  @media screen and (max-width: 800px) {
    min-width: 90%;
  }
`

const BorderedBox = styled( Box )`
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.33);
  height: 200px;
`

export const LatexOutput = ( { tex, showLabel=true } ) => {
  return (
    <MinWidthBox>
      {showLabel && <Text weight='bold' color='dark-5'>Rendered LateX</Text>}
      <BorderedBox align='center' justify='center' margin={{ vertical: 'xsmall' }}>
        <MathJax.Context input='tex'>
          <MathJax.Node>{tex}</MathJax.Node>
        </MathJax.Context>
      </BorderedBox>
    </MinWidthBox>
  )
}

export const LatexInput = ( { editable, tex, setTex, showLabel=true } ) => {
  const NUM_ROWS = 8

  return (
    <MinWidthBox justify='center'>
      {showLabel && <Text weight='bold' color='dark-5'>Input</Text>}
      <Box margin={{ vertical: 'xsmall' }}>
        <TextArea
          placeholder="Insert your TeX text here"
          resize={false}
          rows={NUM_ROWS}
          value={tex}
          onChange={event => editable && setTex( event.target.value )}
          data-cy="latex-input"
        />
      </Box>
    </MinWidthBox>
  )
}

export default ( { editable=true, tex, setTex, ...props } ) => {
  return (
    <Box direction='row' justify='center' align='center' wrap={true} margin="small">
      <LatexInput tex={tex} setTex={setTex} editable={editable} {...props}/>
      <LatexOutput tex={tex} {...props}/>
    </Box>
  )
}
