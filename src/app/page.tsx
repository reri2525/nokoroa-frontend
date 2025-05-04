'use client';

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

export default function TopPage() {
  return (
    <Box
      sx={{
        height: '91vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        mt: '9vh',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255 255 255 / 0.3)',
          },
        }}
      >
        <Box
          component="img"
          src="/top.jpg"
          alt="旅の風景"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
        >
          <Paper
            elevation={0}
            sx={{
              flexBasis: { md: '50%' },
              p: 4,
              textAlign: 'center',
              backgroundColor: 'rgba(255 255 255 / 0.8)',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: '"Yu Mincho","游明朝",YuMincho,serif',
                fontWeight: 500,
                mb: 2,
              }}
            >
              TabiMemory
            </Typography>

            <Typography variant="body1">
              旅の思い出を記録し、大切な人と共有するアプリ。
              あなたの素敵な旅の体験をカタチにしましょう。
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                アカウント作成
              </Button>
              <Button variant="outlined" color="primary" size="large">
                詳しく見る
              </Button>
            </Box>
          </Paper>

          <Box
            sx={{
              flexBasis: { md: '50%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              pr: { md: 4 },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Yu Mincho","游明朝",YuMincho,serif',
                fontWeight: 500,
                color: '#333',
                textShadow: '1px 1px 2px rgba(255 255 255 / 0.8)',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                textAlign: { xs: 'center', md: 'right' },
              }}
            >
              思い出を共有しよう。
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 2,
                fontFamily: '"Yu Mincho","游明朝",YuMincho,serif',
                color: '#555',
                textAlign: 'center',
                alignSelf: 'center',
              }}
            >
              旅の軌跡を、大切な人と。
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
