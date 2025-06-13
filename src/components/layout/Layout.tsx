'use client';

import { useAuth } from '@/providers/AuthProvider';

import Footer from './Footer';
import Header from './Header';

export default function Layout({
  children,
  dialog,
}: {
  children: React.ReactNode;
  dialog: React.ReactNode;
}) {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isAuthenticated && <Footer />}
      {dialog}
    </>
  );
}
