import { Box } from 'grommet'
import Theme from '../../theme'
import ClipLoader from 'react-spinners/ClipLoader'

export default () => (
  <Box flex fill align='center' justify='center'>
    <ClipLoader
      size={30}
      color={Theme.global.colors.brand.dark}
      loading={true}
    />
  </Box>
)
