import { defineTheme } from 'pinceau'

export default defineTheme({
  elements: {
    text: {
      primary: {
        color: {
          static: {
            initial: '#18181B',
            dark: '#fafafa'
          }
        }
      }
    }
  },

  typography: {
    color: {
      primary: {
        '50': '#3B82F6',
        '100': '#3B82F6',
        '200': '#3B82F6',
        '300': '#3B82F6',
        '400': '#3B82F6',
        '500': '#3B82F6',
        '600': '#737373',
        '700': '#7d7d7d',
        '800': '#787878',
        '900': '#8f8f8f'
      }
    }
  },

  alpine: {
    body: {
      backgroundColor: {
        initial: '#000000',
        dark: '#000000'
      }
    }
  }
})