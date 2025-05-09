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
  Stack,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// ---------------- Schema ----------------------
const schema = z.object({
  name: z.string().min(2, '2文字以上入力してください'),
  email: z.string().email('メールアドレスが不正です'),
  password: z.string().min(6, '6文字以上入力してください'),
});

type FormType = z.infer<typeof schema>;

// -------------- Component ---------------------
interface SignUpDialogProps {
  open: boolean;
  defaultRoute?: string; // 戻る URL (例: "/")
}

export default function SignUpDialog({
  open,
  defaultRoute = '/',
}: SignUpDialogProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormType) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    router.push(defaultRoute);
  };

  const handleClose = () => router.push(defaultRoute);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ pr: 6 }}>
        新規登録
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
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
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            キャンセル
          </Button>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            登録
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
