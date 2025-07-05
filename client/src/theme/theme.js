// theme.js
export default function getThemeOptions(mode = 'light') {
    return {
      palette: {
        mode,
        primary: {
          main: '#d4af37',
          light: '#fbe18f',
          dark: '#a9892d',
        },
        secondary: {
          main: '#0A192F',
          light: '#1F2A44',
          dark: '#000A1F',
        },
      },
      components: {
        MuiAppBar: {
          defaultProps: {
            color: 'secondary',
          },
        },
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
      },
      typography: {
        fontFamily: `'Inter', 'Montserrat', sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        h1: { fontFamily: `'Playfair Display', serif` },
        h2: { fontFamily: `'Playfair Display', serif` },
        h3: { fontFamily: `'Montserrat', sans-serif` },
        h4: { fontFamily: `'Montserrat', sans-serif` },
        h5: { fontFamily: `'Montserrat', sans-serif` },
        h6: { fontFamily: `'Montserrat', sans-serif` },
        subtitle1: { fontFamily: `'Cormorant Garamond', serif`, fontStyle: 'italic' },
        subtitle2: { fontFamily: `'Inter', sans-serif` },
      },
    };
  }
  