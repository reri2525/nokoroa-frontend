'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        width: '100%',
        py: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
            divider={
              <Box
                component="span"
                sx={{
                  width: '1px',
                  height: '1rem',
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                }}
              />
            }
          >
            <Link
              component={NextLink}
              href="/terms"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              利用規約
            </Link>

            <Link
              component={NextLink}
              href="/privacy"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
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
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              © 2025 Nokoroa
            </Typography>

            <IconButton
              component="a"
              href="https://github.com/reri2525/tabi-memory-frontend"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="small"
              sx={{
                p: 0.5,
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
