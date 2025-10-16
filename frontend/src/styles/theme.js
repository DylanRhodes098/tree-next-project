import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      brand: {
        main: '#FFFFFF',         
        contrastText: '#ffffff',  
      }, 
      brand2: {
        main: '#4CAF50',
        contrastText: '#fff',
      },
    },
  });
  
  export default theme;