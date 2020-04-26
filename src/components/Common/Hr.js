/* eslint-disable no-magic-numbers */

import styled from 'styled-components'

export default styled( 'hr' )`
    width: ${props => props.width || '30%'};
    color: black;
`
