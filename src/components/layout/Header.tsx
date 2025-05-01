'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        height: '16vh', // 高さを 16 vh に固定
        justifyContent: 'center', // Toolbar を縦方向中央寄せ
        bgColor: 'background.paper', // 好みで
      }}
    >
      <Toolbar disableGutters sx={{ px: 3 /* 左右の余白 */ }}>
        {/* 左側：タイトル */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          TITLE
        </Typography>

        {/* 右側：ボタンたち */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" color="inherit">
            ログイン
          </Button>
          <Button variant="contained" color="secondary">
            新規登録です
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
