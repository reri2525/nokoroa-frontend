'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/providers/AuthProvider';

export default function TopPage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null; // またはローディングスピナーを表示
  }

  if (isAuthenticated) {
    return (
      <DashboardLayout>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Box key={item}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/top.jpg"
                  alt="旅行写真"
                />
                <CardContent sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
                  <Stack spacing={2}>
                    <Box>
                      <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        素晴らしい旅行の思い出
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        2024年3月15日
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      美しい景色と素晴らしい体験の数々。この旅で得られた思い出は一生の宝物になりました。
                      地元の人々との交流や、美味しい料理、壮大な自然の景色など、忘れられない体験がたくさんありました。
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ flexWrap: 'wrap', gap: 1 }}
                    >
                      <Chip
                        icon={<LocationOnIcon />}
                        label="沖縄"
                        size="small"
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'primary.contrastText',
                        }}
                      />
                      <Chip
                        label="#絶景"
                        size="small"
                        sx={{
                          bgcolor: 'secondary.light',
                          color: 'secondary.contrastText',
                        }}
                      />
                      <Chip
                        label="#グルメ"
                        size="small"
                        sx={{
                          bgcolor: 'info.light',
                          color: 'info.contrastText',
                        }}
                      />
                    </Stack>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        pt: 1,
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Avatar
                          src="https://source.unsplash.com/random/100x100?portrait"
                          sx={{ width: 32, height: 32 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          ユーザー名
                        </Typography>
                      </Box>
                      <IconButton
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
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
