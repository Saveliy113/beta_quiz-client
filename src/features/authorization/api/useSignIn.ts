import { useAppDispatch } from '@/appLayer/appStore';
import { LoginDto } from '@/entities/user/model/types';
import UserService from '@/entities/user/api/user.service';
import { setAuthed } from '@/entities/user/model/userSlice';
import useNotify from '@/shared/hooks/useNotify';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { notify } = useNotify();

  const {
    isLoading,
    isSuccess,
    mutate: signIn,
  } = useMutation(['signIn'], (dto: LoginDto) => UserService.login(dto), {
    onSuccess: ({ data }) => {
      Cookies.set('_auth', data.auth_token);
      dispatch(setAuthed(true));
      notify({ success: true, message: 'Вход выполнен успешно' });

      router.push('/lessons');
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response?.data.message) {
        notify({ error: true, message: error.response.data.message });
      } else
        notify({ error: true, message: 'Возникла ошибка при авторизации' });
    },
  });

  return {
    isLoading,
    isSuccess,
    signIn,
  };
};
