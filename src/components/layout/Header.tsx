'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <Toolbar disableGutters sx={{ px: 3, height: '9vh' }}>
        <Link
          href="/"
          style={{
            flexGrow: 1,
            display: 'block',
            cursor: 'pointer',
            textDecoration: 'none',
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
          <Link
            href="/login"
            style={{ textDecoration: 'none' }}
            scroll={false}
            prefetch={false}
          >
            <Button variant="outlined" color="inherit">
              ログイン
            </Button>
          </Link>
          <Link
            href="/signup"
            style={{ textDecoration: 'none' }}
            scroll={false}
            prefetch={false}
          >
            <Button variant="contained" color="secondary">
              新規登録
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </Box>
  );
}
