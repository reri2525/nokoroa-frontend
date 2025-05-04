'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        width: '100%',
        p: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Link
          component={NextLink}
          href="/terms"
          color="inherit"
          underline="hover"
          sx={{ fontSize: '0.875rem' }}
        >
          利用規約
        </Link>

        <Link
          component={NextLink}
          href="/privacy"
          color="inherit"
          underline="hover"
          sx={{ fontSize: '0.875rem' }}
        >
          プライバシーポリシー
        </Link>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2" color="white" sx={{ fontSize: '0.75rem' }}>
          © 2025 TabiMemory
        </Typography>

        <IconButton
          component="a"
          href="https://github.com/reri2525/tabi-memory-frontend"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          size="small"
          sx={{ p: 0.5 }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}
