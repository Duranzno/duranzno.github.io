import { convertHex } from '@utils'
import mainColors from '../gatsby/colors'

const { theme_color: primary } = mainColors
const colors = {
  text: '#000000',
  textWhite: '#EEE',
  background: '#f6f6f6',
  primary,
  grey: 'grey',
  black: 'black',
  secondary: '#306',
}
const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}
const sizes = [0, 4, 8, 16, 32, 64, 128, 256, 512]
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes,
  fonts: {
    body: 'Karla, Helvetica, sans-serif',
    heading: 'Karla, Helvetica, sans-serif',
    monospace: 'Space Mono, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        WebkitBoxShadow: `inset 0 0 50px ${convertHex(colors.primary)}`,
      },
      '::-webkit-scrollbar-track': {
        WebkitBoxShadow: `inset 0 0 20px ${convertHex(colors.text)}`,
      },
      '::-webkit-scrollbar-thumb:hover': {
        WebkitBoxShadow: `inset 0 0 50px ${convertHex(colors.primary, 1)}`,
      },
      overflowX: 'hidden',
    },
    body: {
      minWidth: '320px',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  cards: {
    primary: {
      // padding: 2,
      // width: sizes[8],
      // maxWidth: sizes[8],
      // minHeight: '384px',
      // borderRadius: 4,
      // boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      // backgroundColor: colors.background,
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  text: {
    white: {
      color: 'textWhite',
    },
    small: {
      size: '16px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    tag: {
      color: 'textWhite',
      bg: 'black',
      fontFamily: 'monospace',
      borderRadius: '0%',
      borderColor: 'transparent',
    },
  },
}
