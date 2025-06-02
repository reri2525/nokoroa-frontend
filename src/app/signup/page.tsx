'use client';

import { Box, Container } from '@mui/material';

import SignUpDialog from '@/components/auth/SignUpDialog';

export default function SignupPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      {/* ダイアログを“ページ風”に中央配置するだけでも UX は統一できる */}
      <Box boxShadow={3} borderRadius={2} overflow="hidden">
        <SignUpDialog
          // フルページなので閉じるボタンはルート (/) に戻す or 非表示
          onClose={() => {
            if (typeof window !== 'undefined') {
              window.location.href = '/';
            }
          }}
        />
      </Box>
    </Container>
  );
}
