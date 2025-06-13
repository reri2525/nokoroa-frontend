'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: '9vh',
        justifyContent: 'center',
        bgcolor: 'white',
        color: 'primary.main',
        borderBottom: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <Toolbar disableGutters sx={{ px: 3 }}>
        <Link
          component={NextLink}
          href="/"
          underline="none"
          sx={{
            flexGrow: 1,
            display: 'block',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Nokoroa
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={NextLink}
            href="/login"
            variant="outlined"
            color="inherit"
          >
            ログイン
          </Button>
          <Button
            component={NextLink}
            href="/signup"
            variant="contained"
            color="secondary"
          >
            新規登録
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
