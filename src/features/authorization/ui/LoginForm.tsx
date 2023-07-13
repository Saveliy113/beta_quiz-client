'use client';

import { FC, ReactNode } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.scss';
import { loginFormSchema } from '../model/loginFormSchema';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { useMutation } from '@tanstack/react-query';
import SignInService from '../model/signIn.service';
import { LoginDto, LoginFormInputs } from '../model/types';
import { AxiosError } from 'axios';
import useNotify from '@/shared/hooks/useNotify';
import { useRouter } from 'next/navigation';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import Cookies from 'js-cookie';

type LoginResponse = {
  data: {
    auth_token: string;
  };
};

const LoginForm: FC = () => {
  const { notify } = useNotify();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onSubmit',
  });

  const { isLoading, mutate: signIn } = useMutation(
    ['signIn'],
    (dto: LoginDto) => SignInService.login(dto),
    {
      onSuccess: ({ data }) => {
        console.log(data);
        Cookies.set('_auth', data.auth_token);
        router.push('/lessons');
      },
      onError: (error: AxiosError<{ message: string }>) => {
        if (error.response?.data.message) {
          notify({ error: true, message: error.response.data.message });
        } else
          notify({ error: true, message: 'Возникла ошибка при авторизации' });
      },
    }
  );

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    signIn(data);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <InputMask
        mask="+7(999)999-99-99"
        maskChar={null}
        label="Телефон"
        fullWidth
        error={!!errors.phone}
        helperText={errors?.phone?.message}
        {...register('phone')}
      >
        {
          // @ts-ignore
          (inputProps: InputMaskProps & TextFieldProps): ReactNode => (
            <TextField {...inputProps} />
          )
        }
      </InputMask>
      <TextField
        label="Пароль"
        type="password"
        fullWidth
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register('password')}
      />
      {isLoading ? (
        <DotsLoader />
      ) : (
        <CustomButton
          innerText="Войти"
          onClick={() => {}}
          disabled={!!errors.phone || !!errors.password}
        />
      )}
    </form>
  );
};

export default LoginForm;
