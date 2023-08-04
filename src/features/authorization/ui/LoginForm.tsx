'use client';

import { FC, ReactNode } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.scss';
import { loginFormSchema } from '../model/loginFormSchema';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { LoginFormInputs } from '../model/types';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import { useSignIn } from '../api/useSignIn';

const LoginForm: FC = () => {
  const { isLoading, isSuccess, signIn } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onSubmit',
  });

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
          outlined
          rounded
          width="fullWidth"
          disabled={!!errors.phone || !!errors.password || isSuccess}
        />
      )}
    </form>
  );
};

export default LoginForm;
