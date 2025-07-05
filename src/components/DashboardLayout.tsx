'use client';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { removeToken } from '@/utils/auth';

const drawerWidth = 240;

interface DashboardLayoutProps {
  children: React.ReactNode;
  mobileOpen?: boolean;
  onMobileToggle?: () => void;
}

export default function DashboardLayout({
  children,
  mobileOpen = false,
  onMobileToggle,
}: DashboardLayoutProps) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogout = () => {
    removeToken();
    window.location.href = '/';
  };

  const menuItems = [
    { text: 'ホーム', icon: <HomeIcon />, path: '/', color: '#2196f3' },
    { text: '検索', icon: <SearchIcon />, path: '/search', color: '#ff9800' },
    { text: '地図から探す', icon: <MapIcon />, path: '/map', color: '#4caf50' },
    {
      text: 'タグ一覧',
      icon: <LocalOfferIcon />,
      path: '/tags',
      color: '#9c27b0',
    },
    {
      text: 'お気に入り',
      icon: <FavoriteIcon />,
      path: '/favorites',
      color: '#e91e63',
    },
    {
      text: '自分の投稿',
      icon: <FolderIcon />,
      path: '/my-posts',
      color: '#607d8b',
    },
  ];

  const drawerContent = (
    <>
      {/* ユーザープロフィールセクション */}
      <Box sx={{ p: 2 }}>
        <ListItemButton
          onClick={() => router.push('/profile')}
          sx={{
            borderRadius: 2,
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <ListItemIcon>
            <Avatar sx={{ width: 32, height: 32 }}>
              <PersonIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="ユーザー名"
            secondary="プロフィールを見る"
            slotProps={{
              primary: {
                fontSize: '0.9rem',
                fontWeight: 500,
              },
              secondary: {
                fontSize: '0.8rem',
              },
            }}
          />
        </ListItemButton>
      </Box>

      <Divider />
      <Box sx={{ overflow: 'auto', height: '100%' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(item.path);
                  if (isMobile && onMobileToggle) {
                    onMobileToggle();
                  }
                }}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color: item.color || 'text.secondary',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  slotProps={{
                    primary: {
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => router.push('/settings')}
              sx={{
                py: 1.5,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: 'text.secondary',
                }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="設定"
                slotProps={{
                  primary: {
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                py: 1.5,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: 'text.secondary',
                }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="ログアウト"
                slotProps={{
                  primary: {
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        {/* フッターセクション */}
        <Box sx={{ mt: 'auto', p: 2, textAlign: 'center' }}>
          <Stack spacing={1} alignItems="center">
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              divider={
                <Box
                  component="span"
                  sx={{
                    width: '1px',
                    height: '12px',
                    bgcolor: 'divider',
                  }}
                />
              }
            >
              <Link
                component={NextLink}
                href="/terms"
                color="text.secondary"
                underline="hover"
                sx={{
                  fontSize: '0.75rem',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                利用規約
              </Link>
              <Link
                component={NextLink}
                href="/privacy"
                color="text.secondary"
                underline="hover"
                sx={{
                  fontSize: '0.75rem',
                  '&:hover': {
                    color: 'primary.main',
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
                  fontSize: '0.7rem',
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
                  color: 'text.secondary',
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
      </Box>
    </>
  );

  return (
    <Box sx={{ display: 'flex', pt: '9vh', minHeight: '100vh' }}>
      {/* モバイル用の一時的なDrawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* デスクトップ用の固定Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'static',
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
            height: 'calc(100vh - 9vh)',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: 'calc(100vh - 9vh)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
