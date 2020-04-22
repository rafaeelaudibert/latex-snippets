import { FormPreviousLink } from 'grommet-icons'
import voidSvg from '../../images/void.svg'
import ErrorBase from './Base'

export default ( { resource='page' } ) => (
  <ErrorBase
    imageSrc={voidSvg}
    imageAlt={`Oops, you are not allowed to access this ${resource}`}
    paragraphText={`You are not allowed to access this ${resource}`}
    buttonLabel={'Go back'}
    buttonIcon={<FormPreviousLink />}
    buttonOnClick={() => window.history.back()}/>
)
