import { Button } from 'grommet'

const FloatingButtonStyle = {
  position: 'fixed',
  width: 60,
  height: 60,
  bottom: 40,
  right: 40,
  borderRadius: 50,
  textAlign: 'center',
  boxShadow: '2px 2px 10px #999',
  background: '#fff'
}

export default props => <Button style={FloatingButtonStyle} {...props}>
  {props.children}
</Button>
