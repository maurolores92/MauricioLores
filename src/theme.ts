import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#b2b4b2',
    },
    secondary: {
      main: '#151f42',
    },
    error: {
      main: red.A400,
    },
    grey: {
      900: '#111827',
      800: '#1C2431',
      700: '#374151',
      600: '#4B5563',
      500: '#6B7280',
      400: '#9CA3AF',
      300: '#D1D5DB',
      200: '#E5E7EB',
      100: '#F3F4F6',
      50: '#F9FAFB',
    }
  },
  typography: {
    fontFamily: ['Consolas', 'monospace'].join(','),
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
