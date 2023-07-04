'use client';

import { FC } from 'react';
import { TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.scss';
import { loginFormSchema } from '../model/loginFormSchema';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';

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
  } = useForm<Inputs>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.loginForm}>
      <InputMask
        mask="+7(999)999-9999"
        maskChar={null}
        label="Телефон"
        error={!!errors.phone}
        helperText={errors?.phone?.message}
        {...register('phone')}
      >
        {(inputProps: InputMaskProps) => (
          <TextField disableUnderline {...inputProps} />
        )}
      </InputMask>
      <TextField
        label="Пароль"
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register('password')}
      />
    </form>
  );
};

export default LoginForm;
