'use client'

import { ChakraProvider, defaultConfig, defineConfig, createSystem, defineRecipe, defineSlotRecipe } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

const inputRecipe = defineRecipe({
  base: {
    backdropFilter: 'blur(10px)',
    bg: 'rgb(0, 0, 0, 0.3)',
    color: 'rgb(255, 255, 255, 0.7)',
    borderRadius: "md",
    fontSize: ["md", "lg"],
    px: "2",
    py: "1",
    maxWidth: "none",
  },
  className: 'dark-glassy'
});

const switchRecipe = defineSlotRecipe({
  slots: ['root', 'label', 'indicator', 'thumb', 'control'],
  base: {
    root: {
      display: "inline-flex",
      gap: "2.5",
      alignItems: "center",
      position: "relative",
      verticalAlign: "middle",
      "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
      "--switch-x": {
        base: "var(--switch-diff)",
        _rtl: "calc(var(--switch-diff) * -1)",
      },
    },

    label: {
      lineHeight: "1",
      userSelect: "none",
      fontSize: "sm",
      fontWeight: "medium",
      _disabled: {
        opacity: "0.5",
      },
    },

    indicator: {
      position: "absolute",
      height: "var(--switch-height)",
      width: "var(--switch-height)",
      fontSize: "var(--switch-indicator-font-size)",
      fontWeight: "medium",
      flexShrink: 0,
      userSelect: "none",
      display: "grid",
      placeContent: "center",
      transition: "inset-inline-start 0.12s ease",
      insetInlineStart: "calc(var(--switch-x) - 2px)",
      _checked: {
        insetInlineStart: "2px",
      },
    },

    control: {
      display: "inline-flex",
      gap: "0.5rem",
      bg: 'brand.600',
      flexShrink: 0,
      justifyContent: "flex-start",
      cursor: "switch",
      borderRadius: "full",
      position: "relative",
      width: "var(--switch-width)",
      height: "var(--switch-height)",
      transition: "backgrounds",
      _disabled: {
        opacity: "0.5",
        cursor: "not-allowed",
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "border.error",
        outlineOffset: "2px",
      },
    },
    thumb: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transitionProperty: "translate",
      transitionDuration: "fast",
      borderRadius: "inherit",
      _checked: {
        translate: "var(--switch-x) 0",
      },
    },
  },
  variants: {
    color: {
      brand: {
        control: {
          bg: 'brand.900',
          _hover: { bg: 'brand.500' },
          _checked: { bg: 'brand.200', _hover: { bg: 'brand.100' } },
          _focusVisible: { boxShadow: "outline" },
        },
        thumb: {
          bg: 'white',
        },
      }
    },
  },
  defaultVariants: {
    color: 'brand'
  }
});
  

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: '#387683' }, // lightest
          200: { value: '#326c78' },
          300: { value: '#2c616c' },
          400: { value: '#265660' },
          500: { value: '#203A43' }, // mid
          600: { value: '#1b3035' },
          700: { value: '#151f27' },
          800: { value: '#10191f' },
          900: { value: '#0f1821' },
          1000: { value: '#0F2027' }  // darkest
        }
      },
    },
    recipes: {
      input: inputRecipe,
      switch: switchRecipe
    },
    slotRecipes: {
      switch: switchRecipe
    }
  },
});

const system = createSystem(defaultConfig, customConfig);

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
