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

/* ------------------ 定数 ------------------ */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

/* ------------------ スキーマ & 型 ------------------ */
const schema = z
  .object({
    name: z.string().min(2, '2文字以上入力してください'),
    email: z.string().email('メールアドレスが不正です'),
    password: z.string().min(6, '6文字以上入力してください'),
    confirmPassword: z.string().min(6, '6文字以上入力してください'),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ['confirmPassword'],
    message: '確認用パスワードが一致しません',
  });

type FormType = z.infer<typeof schema>;

/* ------------------ Props 定義 ------------------ */
interface SignUpDialogProps {
  /** `router.back()` などで「戻る」挙動をさせるコールバック */
  onClose: () => void;
}

/* ------------------ Dialog 本体 ------------------ */
export default function SignUpDialog({ onClose }: SignUpDialogProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  /* ----- フォーム送信 ----- */
  const onSubmit = async (data: FormType) => {
    try {
      const response = await fetch(`${API_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error('登録に失敗しました');
      }

      const result = await response.json();
      console.log('登録成功:', result);
      onClose();
    } catch (error) {
      console.error('登録エラー:', error);
      // TODO: エラーメッセージをユーザーに表示する
    }
  };

  /* ----- リンククリック時：まず閉じて、その後に遷移 ----- */
  const jump = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    setTimeout(() => router.push(path), 0);
  };

  return (
    <Dialog open maxWidth="xs" fullWidth onClose={onClose}>
      {/* ---------- ヘッダー ---------- */}
      <DialogTitle sx={{ pr: 6 }}>
        新規登録
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* ---------- 本体 ---------- */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <MuiLink href="/terms" underline="hover" onClick={jump('/terms')}>
              利用規約
            </MuiLink>
            および
            <MuiLink
              href="/privacy"
              underline="hover"
              onClick={jump('/privacy')}
            >
              プライバシーポリシー
            </MuiLink>
            に同意した上で、以下の「登録」ボタンを押してください。
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="ユーザー名"
              fullWidth
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
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
            <TextField
              label="パスワード（確認用）"
              type="password"
              fullWidth
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </Stack>
        </DialogContent>

        {/* ---------- アクション ---------- */}
        <DialogActions sx={{ px: 3, pb: 2, pt: 0 }}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isSubmitting}
          >
            登録
          </Button>
        </DialogActions>

        {/* ---------- フッター ---------- */}
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          会員登録済の方は{' '}
          <MuiLink href="/login" underline="hover" onClick={jump('/login')}>
            こちら
          </MuiLink>
        </Typography>
      </form>
    </Dialog>
  );
}
