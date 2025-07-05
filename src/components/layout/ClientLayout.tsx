'use client';

import { useEffect, useState } from 'react';

import Footer from '@/components/layout/Footer';
import { getToken } from '@/utils/auth';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, []);

  return (
    <>
      <main>{children}</main>
      {!isAuthenticated && <Footer />}
    </>
  );
}
