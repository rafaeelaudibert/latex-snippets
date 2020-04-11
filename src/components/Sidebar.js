import Link from 'next/link'
import { Anchor, Box, Button, Collapsible, Layer, Nav } from 'grommet'
import { FormClose } from 'grommet-icons'
import NavigationLinks from './descriptors/NavigationLinks'

const generateRoutesList = color => NavigationLinks.map( ( { href, as, icon, label } ) => {
  return (
    <Box key={as} pad='small'>
      <Link href={href} as={as}>
        <Anchor padding='small' icon={icon} label={label} color={color} hoverIndicator />
      </Link>
    </Box>
  )
} )

const sidebarMobile = ( { onClose } ) => (
  <Layer>
    <Box
      background='light-2'
      tag='header'
      justify='end'
      align='center'
      direction='row'
    >
      <Button
        focusIndicator={false}
        icon={<FormClose />}
        onClick={onClose}
      />
    </Box>

    <Box
      fill
      background='light-2'
      align='center'
      justify='evenly'
    >
      {generateRoutesList( 'brand' )}
    </Box>
  </Layer>
)

const sidebarDesktop = ( { showSidebar } ) => (
  <Collapsible direction="horizontal" open={showSidebar}>
    <Box
      flex
      width='small'
      background='light-2'
      elevation='small'
      align='center'
      justify='start'
    >
      <Nav direction="column" background="brand" align='center' justify='center' fill='horizontal' pad={{ top: 'small' }}>
        {generateRoutesList( 'light-1' )}
      </Nav>
    </Box>
  </Collapsible>
)


export default props => ( props.showSidebar && props.screenSize === 'small' )
  ? sidebarMobile( props )
  : sidebarDesktop( props )

