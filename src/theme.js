import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E9FD9',
      light: '#4DB8E8',
      dark: '#0E7DB5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2DC890',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#E8F4FD',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#555555',
      disabled: '#909090',
    },
    divider: '#C8E6F5',
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#1E9FD9',
          '&:hover': { backgroundColor: '#0E7DB5' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #C8E6F5',
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #C8E6F5',
        },
      },
    },
  },
});

export default theme;
