import { defineTheme } from 'pinceau'

export default defineTheme({
  elements: {
    text: {
      primary: {
        color: {
          static: {
            initial: '#fafafa',
            dark: '#fafafa'
          }
        }
      },

      secondary: {
        color: {
          static: {
            initial: 'var(--color-gray-400)'
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
      },

      secondary: {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',

        '400': {
          value: ''
        },

        '500': {
          value: ''
        },

        '600': {
          value: ''
        },

        '700': {
          value: ''
        }
      }
    }
  },

  alpine: {
    body: {
      backgroundColor: {
        initial: '#000000',
        dark: '#000000'
      },

      color: {
        initial: 'var(--color-gray-200)'
      }
    },

    backdrop: {
      backgroundColor: {
        initial: '#18181bb3'
      }
    }
  },

  color: {
    lightblue: {
      '300': '#3482F6',
      '400': '#3482F6',
      '500': '#3482F6',
      '600': '#3482F6',
      '200': '#3482F6'
    },

    primary: {
      '500': '#bdbdbd'
    }
  },

  font: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color'
  },

  prose: {
    blockquote: {
      color: {
        initial: 'var(--typography-color-secondary-400)'
      }
    },

    code: {
      block: {
        color: {
          initial: 'var(--typography-color-secondary-200)'
        },

        backgroundColor: {
          initial: 'var(--typography-color-secondary-900)'
        }
      },

      inline: {
        color: {
          initial: 'var(--typography-color-secondary-200)'
        },

        backgroundColor: {
          initial: 'var(--typography-color-secondary-800)'
        }
      }
    }
  }
})