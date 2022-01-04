import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '10rem',
      fontWeight: '900'
    },
  },
  // components: {
  //   // Name of the component
  //   MuiButton: {
  //     styleOverrides: {
  //       // Name of the slot
  //       root: {
  //         // Some CSS
  //         fontSize: '1rem',
  //       },
  //     },
  //   },
  // },
});

theme = responsiveFontSizes(theme);

export default theme;