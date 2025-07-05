'use client';

import { useState } from 'react';

import { useAuth } from '@/providers/AuthProvider';

import DashboardLayout from '../DashboardLayout';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return (
      <>
        <Header onMobileToggle={handleMobileToggle} />
        <DashboardLayout
          mobileOpen={mobileOpen}
          onMobileToggle={handleMobileToggle}
        >
          {children}
        </DashboardLayout>
        {dialog}
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {dialog}
    </>
  );
}
