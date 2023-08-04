import { useMutation } from '@tanstack/react-query';
import { CheckTeacherDto, CreateTeacherDto } from '../model/types';
import { AxiosError } from 'axios';
import SignUpService from './signUp.service';
import useNotify from '@/shared/hooks/useNotify';
import { useRouter } from 'next/navigation';

export const useSignUp = () => {
  const { notify } = useNotify();
  const router = useRouter();

  const {
    isLoading: checkTeacherIsLoading,
    isSuccess: checkTeacherIsSuccess,
    mutate: checkTeacher,
  } = useMutation(
    ['checkTeacher'],
    (body: CheckTeacherDto) => SignUpService.checkTeacher(body),
    {
      onError: (error: AxiosError<{ message: string }>) => {
        if (error.response) {
          notify({ error: true, message: error.response.data.message });
        } else {
          notify({ success: true, message: 'Ошибка при проверке учителя' });
        }
      },
    }
  );

  const {
    isLoading: createTeacherIsLoading,
    isSuccess: createTeacherIsSuccess,
    mutate: createTeacher,
  } = useMutation(
    ['createTeacher'],
    (body: CreateTeacherDto) => SignUpService.createTeacher(body),
    {
      onSuccess: () => {
        notify({
          success: true,
          message: 'Вы успешно зарегистрированы!',
        });
        setTimeout(() => router.push('/signin'), 1000);
      },
      onError: (error: AxiosError<{ message: string }>) => {
        if (error.response) {
          notify({ error: true, message: error.response.data.message });
        } else {
          notify({ error: true, message: 'Ошибка при регистрации' });
        }
      },
    }
  );

  return {
    checkTeacherIsLoading,
    checkTeacherIsSuccess,
    checkTeacher,
    createTeacherIsLoading,
    createTeacherIsSuccess,
    createTeacher,
  };
};
