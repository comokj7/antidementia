import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';

import { Router } from './router';

export const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};
