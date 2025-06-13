'use client';

import { useRouter } from 'next/navigation';

import LoginDialog from '@/components/auth/LoginDialog';

export default function LoginDialogPage() {
  const router = useRouter();
  return (
    <LoginDialog
      onClose={() => {
        router.back();
      }}
    />
  );
}
