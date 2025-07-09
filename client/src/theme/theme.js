
export default function getThemeOptions(mode = 'light') {
  const isDark = mode === 'dark';

  return {
    palette: {
      mode,
      background: {
        default: isDark ? '#0A192F' : '#FFF0A0', // ✅ override here
        paper: isDark ? '#1C2A40' : '#FFD700',   // ✅ override here
      },
      primary: {
        main: '#d4af37',
        light: '#FFD700',
        dark: '#B8860B',
      },
      secondary: {
        main: '#0A192F',
        light: '#1C2A40',
        dark: '#0A1D37',
      },
      text: {
        primary: isDark ? '#FFD700' : '#0A1D37', // ✅ override text color
      },
      custom: {
        contrastColor: isDark ? '#fff' : '#000',
        customShade: isDark? '#223E64' : '#FFEA79',
      }
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: 'secondary',
        },
      },
      MuiButtonBase: {
        defaultProps: {
          // disableRipple: true,
        },
      },
       MuiContainer: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? '#343F4E' : '#FFE44F',
          },
        },
      },
    },

    typography: {
      fontFamily: `'Inter', 'Montserrat', sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      h1: { fontFamily: `'Playfair Display', serif`, color: isDark ? '#FFD700' : '#0A1D37' },
      h2: { fontFamily: `'Playfair Display', serif`, color: isDark ? '#FFD700' : '#0A1D37' },
      h3: { fontFamily: `'Montserrat', sans-serif`, color: isDark ? '#FFD700' : '#0A1D37' },
      h4: { fontFamily: `'Montserrat', sans-serif`, color: isDark ? '#FFD700' : '#0A1D37' },
      h5: { fontFamily: `'Montserrat', sans-serif`, color: isDark ? '#FFD700' : '#0A1D37' },
      h6: { fontFamily: `'Montserrat', sans-serif`, color: isDark ? '#FFD700' : '#0A1D37' },
      body1: { color: isDark ? '#FFD700' : '#0A1D37' },
      body2: { color: isDark ? '#eeeeee' : '#333333' },
      subtitle1: {
        fontFamily: `'Cormorant Garamond', serif`,
        fontStyle: 'italic',
        color: isDark ? '#dddddd' : '#0A1D37',
      },
      subtitle2: { fontFamily: `'Inter', sans-serif`, color: isDark ? '#dddddd' : '#0A1D37' },
    },
    
  };
}
