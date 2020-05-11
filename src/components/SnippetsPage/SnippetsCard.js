import Link from 'next/link'
import { Box, Button, Heading, Text } from 'grommet'
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

export default ( { id, name='LateX Snippet', content, isPublic } ) => {
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
        <Box direction='row' align='end' justify='end' pad={{ bottom: 'small', right: 'small' }}>
          <ClipboardButton text={content}/>
          <Link href={`/snippet?id=${id}`}>
            <Button label='Edit snippet' size='small' margin={{ left: 'small' }}/>
          </Link>

        </Box>

      </Box>

    </Card>
  )
}
