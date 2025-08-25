import { Box, Field as ChakraField, defineStyle } from '@chakra-ui/react'
import * as React from 'react'

export const Field = React.forwardRef(function Field(props, ref) {
  const { label, children, helperText, errorText, optionalText, ...rest } =
    props

  const child = React.Children.only(children)
  //Add peer to child element
  const childWithPeer = React.cloneElement(child, {
    className: (child.props.className ?? '') + ' peer',
  })
  return (
    <ChakraField.Root>
      <Box position="relative" width="100%">
        {childWithPeer}

      {label && (
        <ChakraField.Label css={floatingStyles}>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
      </Box>
    </ChakraField.Root>
  )
})

const floatingStyles = defineStyle({
  pos: "absolute",
  px: "0.5",
  zIndex: "1",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
})