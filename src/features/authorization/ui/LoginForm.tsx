'use client';

import { FC, ReactNode } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.scss';
import { loginFormSchema } from '../model/loginFormSchema';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';

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
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <InputMask
        mask="+7(999)999-9999"
        maskChar={null}
        label="Телефон"
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
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register('password')}
      />

      <CustomButton
        innerText="Войти"
        onClick={() => {}}
        disabled={!!errors.phone || !!errors.password}
      />
    </form>
  );
};

export default LoginForm;
