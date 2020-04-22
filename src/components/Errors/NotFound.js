import { FormPreviousLink } from 'grommet-icons'
import notFoundSvg from '../../images/notFound.svg'
import ErrorBase from './Base'

export default ( { resource='page' } ) => (
  <ErrorBase
    imageSrc={notFoundSvg}
    imageAlt={`Oops, this ${resource} could not be found. Are you sure you followed to the right place?`}
    paragraphText={
      <>
         This {resource} could not be found. <br/>
       Are you sure you followed to the right place?
      </>
    }
    buttonLabel={'Go back'}
    buttonIcon={<FormPreviousLink />}
    buttonOnClick={() => window.history.back()}/>
)
