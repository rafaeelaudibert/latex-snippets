import { useClipboard } from 'use-clipboard-copy'
import { Button } from 'grommet'

export default ( {
  text='',
  buttonText='Copy to clipboard',
  notSupportedButtonText='Copy is not supported',
  copiedButtonText='Copied!',
  copiedTimeout=600, // eslint-disable-line no-magic-numbers
  ...props
} ) => {
  const clipboard = useClipboard( {
    copiedTimeout
  } )

  if ( !clipboard.isSupported() ) {
    return <Button
      primary
      disabled={true}
      size='small'
      label={notSupportedButtonText}
      color='neutral-2'
      {...props}
    />
  }

  return (
    <Button
      primary
      color='neutral-1'
      size='small'
      label={clipboard.copied ? copiedButtonText : buttonText}
      onClick={() => clipboard.copy( text )}
      {...props}
    />
  )
}
