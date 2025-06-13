'use client';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/LocalOffer';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

import Header from '@/components/layout/Header';
import { removeToken } from '@/utils/auth';

const drawerWidth = 240;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    window.location.href = '/';
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <CssBaseline />
      <Header />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            mt: '9vh',
            height: 'calc(100vh - 9vh)',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRight: '1px solid rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
          <List>
            {[
              {
                text: 'ホーム',
                icon: <HomeIcon />,
                onClick: () => router.push('/'),
              },
              {
                text: '検索',
                icon: <SearchIcon />,
                onClick: () => router.push('/'),
              },
              {
                text: '地図から探す',
                icon: <MapIcon />,
                onClick: () => router.push('/map'),
              },
              {
                text: 'お気に入り',
                icon: <FavoriteIcon />,
                onClick: () => router.push('/'),
              },
              {
                text: 'タグ一覧',
                icon: <TagIcon />,
                onClick: () => router.push('/'),
              },
              {
                text: 'プロフィール',
                icon: <PersonIcon />,
                onClick: () => router.push('/'),
              },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              {
                text: '設定',
                icon: <SettingsIcon />,
                onClick: () => router.push('/'),
              },
              {
                text: 'ログアウト',
                icon: <ExitToAppIcon />,
                onClick: handleLogout,
              },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ p: 2, mt: 'auto' }}>
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
                    bgcolor: 'divider',
                  }}
                />
              }
            >
              <MuiLink
                component={NextLink}
                href="/terms"
                color="inherit"
                underline="hover"
                sx={{
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                利用規約
              </MuiLink>

              <MuiLink
                component={NextLink}
                href="/privacy"
                color="inherit"
                underline="hover"
                sx={{
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                プライバシーポリシー
              </MuiLink>
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
                  color: 'text.secondary',
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
                    color: 'primary.main',
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '9vh',
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
