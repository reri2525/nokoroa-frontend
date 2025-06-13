'use client';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

import { removeToken } from '@/utils/auth';

const drawerWidth = 240;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    window.location.href = '/';
  };

  const menuItems = [
    { text: 'ホーム', icon: <HomeIcon />, path: '/' },
    { text: '投稿一覧', icon: <ExploreIcon />, path: '/posts' },
    { text: 'お気に入り', icon: <FavoriteIcon />, path: '/favorites' },
    { text: 'プロフィール', icon: <PersonIcon />, path: '/profile' },
    { text: '設定', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'fixed',
            top: '9vh',
            height: 'calc(100vh - 9vh)',
            bgcolor: 'white',
            borderRight: '1px solid',
            borderColor: 'grey.300',
            zIndex: 1100,
          },
        }}
      >
        <Divider sx={{ borderColor: 'grey.300' }} />
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => router.push(item.path)}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: 'text.secondary',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
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
                onClick={handleLogout}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'grey.100',
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
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
