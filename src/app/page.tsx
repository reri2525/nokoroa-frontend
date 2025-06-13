'use client';

import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import DashboardLayout from '@/components/DashboardLayout';
import { getToken } from '@/utils/auth';

export default function TopPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, []);

  if (isAuthenticated) {
    return (
      <DashboardLayout>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
            作成
          </Button>
        </Box>
        <Stack spacing={3}>
          <Paper sx={{ p: 2, height: 200 }}>コンテンツ1</Paper>
          <Paper sx={{ p: 2, height: 200 }}>コンテンツ2</Paper>
          <Paper sx={{ p: 2, height: 200 }}>コンテンツ3</Paper>
        </Stack>
      </DashboardLayout>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '91vh',
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
          zIndex: 0,
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
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              backgroundColor: 'rgba(255 255 255 / 0.9)',
              borderRadius: 2,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 500,
                mb: 2,
              }}
            >
              Nokoroa
            </Typography>

            <Typography variant="body1">
              心に残る旅の思い出を、大切な人と共有するアプリ。
              あなたの心に刻まれた旅の体験を、永遠の記録に。
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                component={Link}
                href="/signup"
                scroll={false}
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                アカウント作成
              </Button>
              <Button
                component={Link}
                href="/about"
                scroll={false}
                variant="outlined"
                color="primary"
                size="large"
              >
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
                fontWeight: 500,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0 0 0 / 0.8)',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                textAlign: { xs: 'center', md: 'right' },
              }}
            >
              旅の思い出を、永遠に
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 2,
                color: 'white',
                textAlign: 'center',
                alignSelf: 'center',
                textShadow: '2px 2px 4px rgba(0 0 0 / 0.8)',
              }}
            >
              あなたの心に残る旅の記憶を、大切な人と共有しましょう
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
