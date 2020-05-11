// Partially extracted from https://blog.logrocket.com/the-complete-guide-to-building-inline-editable-ui-in-react/, kudos to Paramanantham Harrison

import React, { useState, useEffect, useRef } from 'react'
import { Box, TextInput, Text } from 'grommet'
import styled from 'styled-components'

const PaddedSpan = styled( Box )`
    padding-left: 2.5rem
`

const PaddedTextInput = styled( TextInput )`
  padding-left: 2.5rem 
`

const EditableField = ( {
  placeholder,
  setText,
  text,
  name,
  editable=true,
  textSize='medium',
  textWeight='normal',
  textColor='dark',
  ...props
} ) => {
  const [ isEditing, setEditing ] = useState( false )
  const childrenRef = useRef()

  useEffect( () => {
    if ( childrenRef.current && isEditing ) {
      childrenRef.current.focus()
    }
  }, [ isEditing, childrenRef ] )

  // Event handler while pressing any key while editing
  const handleKeyDown = ( event ) => {
    const { key } = event
    const allKeys = [ 'Escape', 'Tab', 'Enter' ]

    if ( allKeys.includes( key ) ) {
      setEditing( false )
    }
  }

  return editable && isEditing ?
    (
      <div
        onBlur={() => setEditing( false )}
        onKeyDown={handleKeyDown}
      >
        <PaddedTextInput
          size={textSize}
          ref={childrenRef}
          name={name}
          focusIndicator={false}
          placeholder={placeholder}
          value={text}
          onChange={e => setText( e.target.value )}
          {...props}
        />
      </div>
    ) :
    (
      <PaddedSpan
        onClick={() => setEditing( true )}
        {...props}
      >
        <Text size={textSize} weight={textWeight} color={textColor}>
          {text || placeholder || ''}
        </Text>

      </PaddedSpan>
    )
}

export default EditableField
