'use client';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// When needed::: first argument is needed if you have common enterprise theme, and second argument is to override your enterprise theme.
// apply fonts to all other typography options like headings, subtitles, etc...
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#673ab7',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
});

export default defaultTheme;
