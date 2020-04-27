import { Box } from 'grommet'
import styled from 'styled-components'

const BoxNoHeight = styled( Box )`
    height: unset !important;
    border-radius: ${props => props.borderRadius || '7px'};
`

export default ( { children, ...props } ) => (
  <BoxNoHeight
    pad='small'
    align='center'
    justify='center'
    background='light-3'
    {...props}
  >
    {children}
  </BoxNoHeight>
)
