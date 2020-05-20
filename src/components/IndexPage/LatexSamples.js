import { Box, Button, Text } from 'grommet'

const latexItems = [
  {
    name: 'Simple Integral',
    latexContent: '\\int\\limits_a^b x^2  \\mathrm{d} x'
  },
  {
    name: 'Complex Numbers Explanation',
    latexContent: 'z = \\overbrace{\\underbrace{x}_\\text{real} + i\\underbrace{y}_\\text{imaginary}}^\\text{complex number}'
  },
  {
    name: 'Alignments',
    latexContent: '\\begin{align*}f(x) &= (x+a)(x+b) \\\\&= x^2 + (a+b)x + ab\\end{align*}'
  },
  {
    name: 'Lagrange',
    latexContent: '\\lim_{x\\to 0}{\\frac{e^x-1}{2x}}\\overset{\\left[\\frac{0}{0}\\right]}{\\underset{\\mathrm{H}}{=}}\\lim_{x\\to 0}{\\frac{e^x}{2}}={\\frac{1}{2}}'
  },
  {
    name: 'Maxwell\'s equations',
    latexContent: '\\begin{equation}\\begin{aligned}B\'&=-\\partial \\times E,\\\\E\'&=\\partial\\times B - 4\\pi j\\end{aligned}\\end{equation}'
  }
]

export default ( { setTex } ) => (
  <Box pad='small'>
    <Text alignSelf='center' align='center'>Some samples for you to try:</Text>
    <Box fill='vertical' margin='small' direction='row' align='center' justify='center' wrap={true}>
      {latexItems.map( ( { name, latexContent } ) => (
        <Button key={name} data-cy='latex-sample' data-cy-content={latexContent} margin='small' label={name} onClick={() => setTex( latexContent )}/>
      ) )}
    </Box>
  </Box>

)
