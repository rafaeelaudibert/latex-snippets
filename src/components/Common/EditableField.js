// Partially extracted from https://blog.logrocket.com/the-complete-guide-to-building-inline-editable-ui-in-react/, kudos to Paramanantham Harrison

import React, { useState, useEffect, useRef } from 'react'
import { TextInput } from 'grommet'
import styled from 'styled-components'

const EditableSpan = styled( 'span' )`
    padding: 11px
`

const EditableField = ( {
  placeholder,
  setText,
  text,
  name,
  editable=true,
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
        <TextInput
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
      <EditableSpan onClick={() => setEditing( true )} >
        {text || placeholder || ''}
      </EditableSpan>
    )
}

export default EditableField
