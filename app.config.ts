export default defineAppConfig({
  alpine: {
    title: 'The Infosec Hangout',
    description: '22sh’s infoSec blog: Dive into Write-ups & shenanigans.',
    image: {
      src: '/banner.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'The Infosec Hangout' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '0x22sh',
      instagram: '',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'sofianeelhor'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  },

  prose: {
    h1: {
      icon: ''
    }
  }
})