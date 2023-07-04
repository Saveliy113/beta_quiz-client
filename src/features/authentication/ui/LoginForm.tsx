'use client';

import { TextField } from '@mui/material';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.scss';
import { loginFormSchema } from '../model/loginFormSchema';

type Inputs = {
  phone: string;
  password: string;
};

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.loginForm}>
      <TextField label="Телефон" {...register('phone')} />
      <p>{errors.phone?.message}</p>
      <TextField label="Пароль" type="password" {...register('password')} />
    </form>
  );
};

export default LoginForm;
