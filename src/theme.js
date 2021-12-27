import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
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