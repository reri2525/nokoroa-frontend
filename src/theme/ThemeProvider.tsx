'use client';

import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

export default function CustomThemeProvider({
  children,
}: CustomThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: prefersDarkMode ? '#0a0a0a' : '#ffffff',
            paper: prefersDarkMode ? '#1a1a1a' : '#ffffff',
          },
          text: {
            primary: prefersDarkMode ? '#ffffff' : '#171717',
            secondary: prefersDarkMode ? '#cccccc' : '#666666',
          },
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: prefersDarkMode ? '#1a1a1a' : '#ffffff',
                borderColor: prefersDarkMode ? '#333333' : '#e0e0e0',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: prefersDarkMode ? '#1a1a1a' : '#ffffff',
                borderBottomColor: prefersDarkMode ? '#333333' : '#e0e0e0',
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: prefersDarkMode ? '#333333' : '#f5f5f5',
                },
              },
            },
          },
        },
      }),
    [prefersDarkMode],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
