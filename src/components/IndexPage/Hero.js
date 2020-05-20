import { useContext } from 'react'
import Link from 'next/link'

import { Box, Button, Heading, Paragraph } from 'grommet'
import { BackendContext } from '../../contexts/BackendContext'
import Hr from '../Common/Hr'

const AccessSnippets = () => (
  <Box fill='horizontal' align='center' justify='center' margin={{ top: 'medium' }} data-cy='access-snippets-button'>
    <Hr width={'30%'}/>
    <Link href={'/snippets'}>
      <Button label='Access your snippets' primary focusIndicator={false} color='brand' margin={{ top: 'xsmall' }}/>
    </Link>
  </Box>
)

export default () => {
  const { user } = useContext( BackendContext )

  return (
    <Box align='center' justify='center' background='accent-2' pad='large' height="medium" >
      <Heading textAlign='center' margin='xsmall'>
      Your LateX playground
      </Heading>
      <Paragraph textAlign='center' margin='xsmall'>
      With some extra features, such as saving snippets for later, and sharing them publicly online.
      </Paragraph>
      {user && <AccessSnippets/>}
    </Box>
  )
}
