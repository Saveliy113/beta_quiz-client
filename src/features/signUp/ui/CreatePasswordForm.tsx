'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPasswordFormSchema } from '../model/creastePasswordFromSchema';
import styles from './CreatePasswordForm.module.scss';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import SignUpService from '../model/signUp.service';
import useNotify from '@/shared/hooks/useNotify';
import { useMutation } from '@tanstack/react-query';
import { useAppSelector } from '@/appLayer/appStore';
import { useRouter } from 'next/navigation';
import { CreatePasswordInputs, CreateTeacherDto } from '../model/types';
import { AxiosError } from 'axios';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';

const CreatePasswordForm: FC = () => {
  const { notify } = useNotify();
  const domain = useAppSelector((state) => state.user.domain);
  const phone = useAppSelector((state) => state.user.phone);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePasswordInputs>({
    resolver: zodResolver(createPasswordFormSchema),
    mode: 'onSubmit',
  });

  const {
    isSuccess,
    isLoading,
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

  const onSubmit: SubmitHandler<CreatePasswordInputs> = ({ password }) => {
    createTeacher({ domain, phone, password });
  };

  return (
    <form className={styles.passwordForm} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        fullWidth
        label="Пароль"
        {...register('password')}
      />
      <TextField
        type="password"
        error={!!errors?.password}
        fullWidth
        helperText={errors?.password?.message}
        label="Повторите пароль"
        {...register('confirmPassword')}
      />
      {isLoading ? (
        <DotsLoader />
      ) : (
        <CustomButton
          innerText="Зарегистрироваться"
          onClick={() => {}}
          rounded
          outlined
          disabled={isLoading || isSuccess}
        />
      )}
    </form>
  );
};

export default CreatePasswordForm;
