import { Box, Button, Heading, Image, Paragraph } from 'grommet'

export default ( {
  imageSrc,
  imageAlt,
  paragraphText,
  buttonLabel,
  buttonIcon,
  buttonOnClick
} ) => (
  <Box flex fill align='center' justify='center' background='light-2'>
    <Box height="small" width="small">
      <Image
        fill
        src={imageSrc}
        alt={imageAlt}
      />
    </Box>

    <Heading margin={{ top: 'large', bottom: 'xsmall' }}>Oops!</Heading>
    <Paragraph responsive textAlign='center'>
      {paragraphText}
    </Paragraph>
    <Button
      primary
      icon={buttonIcon}
      label={buttonLabel}
      size="medium"
      color='status-warning'
      onClick={buttonOnClick}
    />
  </Box>
)
