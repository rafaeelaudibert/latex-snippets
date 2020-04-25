import { Box, Heading, Paragraph } from 'grommet'

export default () => (
  <Box align='center' justify='center' background='accent-2' pad='large' height="medium" >
    <Heading margin='xsmall'>
      Your LateX playground
    </Heading>
    <Paragraph textAlign='center' margin='xsmall'>
      With some extra features, such as saving snippets for later, and sharing them publicly online.
    </Paragraph>
  </Box>
)
