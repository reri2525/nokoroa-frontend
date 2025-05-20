'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SignUpDialog from '@/components/auth/SignUpDialog';

export default function SignUpModal() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <SignUpDialog
      open={open}
      onClose={() => {
        setOpen(false);
        router.push('/');
      }}
    />
  );
}
