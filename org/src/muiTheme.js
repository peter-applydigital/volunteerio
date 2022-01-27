import { createTheme } from "@mui/material/styles";
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: "#DD6031",
    },
    secondary: {
      main: "#3C787E",
    },
    error: {
      main: red[500],
    },
  },
});

export default theme;