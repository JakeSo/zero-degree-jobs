'use client'

import { ChakraProvider, defaultConfig, defineConfig, createSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: '#2C5364' },
          200: { value: '#203A43' },
          300: { value: '#0F2027' },
        },
      },
    },
  },
});

const system = createSystem(customConfig, defaultConfig);

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
