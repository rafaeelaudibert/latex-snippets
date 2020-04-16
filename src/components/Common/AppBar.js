import { useContext } from 'react'
import { Box, Button, Heading, ResponsiveContext } from 'grommet'
import { Login, Logout } from 'grommet-icons'
import { ApiContext } from '../../contexts/apiContext'

export default ( props ) => {
  const {
    loginAction,
    logoutAction,
    user
  } = useContext( ApiContext )
  const screenSize = useContext( ResponsiveContext )

  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'medium' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    >
      <Heading level='2' margin='none'>LatexSnippets</Heading>

      <Box direction="row" align="center" justify="end">
        { user ?
          <Button
            focusIndicator={false}
            size='medium'
            icon={<Logout />}
            label={screenSize !== 'small' ? 'Log out' : null}
            onClick={() => loginAction()}
          /> :
          <Button
            focusIndicator={false}
            size='medium'
            icon={<Login />}
            label={screenSize !== 'small' ? 'Log in/Sign up' : null}
            onClick={() => logoutAction()}
          /> }
      </Box>
    </Box>
  )
}
