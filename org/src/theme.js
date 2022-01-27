import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DD6031',
    },
    secondary: {
      main: '#201E50',
    },
    tertiary: {
      main: '#3C787E',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;