'use client';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useAuth } from '@/providers/AuthProvider';

export default function Header() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
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
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            Nokoroa
          </Typography>
        </Link>

        {isAuthenticated ? (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => router.push('/post/new')}
              sx={{
                borderRadius: 2,
                px: 3,
                bgcolor: '#9c27b0',
                color: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  bgcolor: '#7b1fa2',
                  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              投稿
            </Button>
            <IconButton
              onClick={() => router.push('/profile')}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        ) : (
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
        )}
      </Toolbar>
    </Box>
  );
}
