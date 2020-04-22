import { Refresh } from 'grommet-icons'
import profileDataSvg from '../../images/profileData.svg'
import ErrorBase from './Base'

export default () => (
  <ErrorBase
    imageSrc={profileDataSvg}
    imageAlt={`Oops, an error occured during the user authentication. Please try cleaning your cache, and try again!`}
    paragraphText={
      <>
        An error occured during the user authentication. <br/>
       Please try cleaning your cache, and try again!
      </>
    }
    buttonLabel={'Reload'}
    buttonIcon={<Refresh />}
    buttonOnClick={() => window.location.reload()}/>
)
