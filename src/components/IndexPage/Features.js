import { useContext } from 'react'
import { Box, Heading, Image, Paragraph, ResponsiveContext } from 'grommet'

import articleSvg from '../../images/article.svg'
import snippetSvg from '../../images/snippet.svg'
import shareSvg from '../../images/share.svg'

const features = [
  {
    title: 'Full Latex Syntax',
    text: 'Use (almost) everything which is allowed by core LateX, including the basic, alignments, equations, etc...',
    image: articleSvg
  },
  {
    title: 'Save Snippets',
    text: 'After creating your account (in some simple steps), you can save how many LateX snippets you want, for free, forever',
    image: snippetSvg
  },
  {
    title: 'Share them online',
    text: 'You can share your LateX snippets online, to whoever you want, and lock the ones you don\'t want to share',
    image: shareSvg
  }
]

const BoxFeaturesSmall = ( { children, ...props } ) => (
  <Box fill pad='xlarge' justify='center' align='center' {...props}>
    {children}
  </Box>
)

const BoxFeaturesDesktop = ( { children, ...props } ) => (
  <Box fill direction='row' pad='large' justify='evenly' align='center' {...props}>
    {children}
  </Box>
)

export default () => {
  const screenSize = useContext( ResponsiveContext )
  const BoxFeatures = screenSize === 'small' ? BoxFeaturesSmall : BoxFeaturesDesktop

  return (
    <BoxFeatures background='accent-4'>
      {features.map( ( { title, text, image } ) => (
        <Box key={title} fill='vertical' align='center' justify='center' basis='1/3' pad='medium'>
          <Box height='small'>
            <Image
              fill
              src={image}
              alt={title}
            />
          </Box>

          <Heading level={screenSize === 'small' ? '2' : '3'}>{title}</Heading>
          <Paragraph textAlign='center'>{text}</Paragraph>
        </Box>
      ) )}
    </BoxFeatures>
  )
}
