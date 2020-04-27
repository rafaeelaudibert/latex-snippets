import { Box } from 'grommet'
import styled from 'styled-components'

const CardWrapper = styled( Box )`
    border-radius: 25px;
`

export default ( { children } ) => (
  <CardWrapper fill='horizontal' elevation='medium'>
    {children}
  </CardWrapper>
)
