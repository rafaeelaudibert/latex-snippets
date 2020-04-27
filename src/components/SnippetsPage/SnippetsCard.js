import { Box, Heading, Text } from 'grommet'
import styled from 'styled-components'

import Card from '../Common/Card'
import Badge from '../Common/Badge'
import ClipboardButton from '../Common/ClipboardButton'
import { LatexOutput } from '../Common/LatexRenderer'

const Title = styled( Heading )`
  line-height: unset !important;
  margin: auto 0;
  font-weight: 400;
`

export default ( { name='LateX Snippet', content, isPublic } ) => {
  return (
    <Card>
      <Box fill>
        <Box direction='row' fill='horizontal' justify='between'
          pad={{ horizontal: 'medium', top: 'medium' }}>
          <Title level='3' pad='small'>{name}</Title>
          <Badge background={isPublic ? 'neutral-1' : 'neutral-4'}>
            <Text size='small'>
              {isPublic ? 'Public' : 'Private'}
            </Text>
          </Badge>
        </Box>
        <LatexOutput showLabel={false} tex={content}/>
        <Box align='end' justify='end' pad={{ bottom: 'small', right: 'small' }}>
          <ClipboardButton text={content}/>
        </Box>

      </Box>

    </Card>
  )
}
