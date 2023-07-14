'use client';

import { useAppSelector } from '@/appLayer/appStore';
import useNotify from '@/shared/hooks/useNotify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const isAuthed = useAppSelector((state) => state.user.isAuthed);
  const token = Cookies.get('_auth');
  const { notify } = useNotify();

  const router = useRouter();

  if (!isAuthed || !token) {
    notify({
      error: true,
      message: 'У вас нет прав для просмотра этой страницы',
    });
    router.push('/signin');
  }
  return <>{children}</>;
};

export default AuthProvider;
