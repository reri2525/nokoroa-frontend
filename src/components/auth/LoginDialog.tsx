'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const schema = z.object({
  email: z.string().email('メールアドレスが不正です'),
  password: z.string().min(6, '6文字以上入力してください'),
});

type FormType = z.infer<typeof schema>;

interface LoginDialogProps {
  onClose: () => void;
}

export default function LoginDialog({ onClose }: LoginDialogProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormType) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error('ログインに失敗しました');
      }

      const result = await response.json();
      console.log('ログイン成功:', result);
      localStorage.setItem('jwt', result.token);
      onClose();
      window.location.href = '/';
    } catch (error) {
      console.error('ログインエラー:', error);
    }
  };

  const jump = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    setTimeout(() => router.push(path), 0);
  };

  return (
    <Dialog open maxWidth="xs" fullWidth onClose={onClose}>
      <DialogTitle sx={{ pr: 6 }}>
        ログイン
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="メールアドレス"
              type="email"
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="パスワード"
              type="password"
              fullWidth
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2, pt: 0 }}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isSubmitting}
          >
            ログイン
          </Button>
        </DialogActions>

        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          アカウントをお持ちでない方は{' '}
          <MuiLink href="/signup" underline="hover" onClick={jump('/signup')}>
            こちら
          </MuiLink>
        </Typography>
      </form>
    </Dialog>
  );
}
