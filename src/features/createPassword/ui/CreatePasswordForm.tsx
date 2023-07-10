'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPasswordFormSchema } from '../model/creastePasswordFromSchema';
import styles from './CreatePasswordForm.module.scss';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';

type Inputs = {
  password: string;
  confirmPassword: string;
};

interface CreatePasswordForm {}

const CreatePasswordForm: FC<CreatePasswordForm> = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createPasswordFormSchema),
    mode: 'onSubmit',
  });

  console.log('Errors: ', errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.passwordForm} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        label="Пароль"
        {...register('password')}
      />
      <TextField
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        label="Повторите пароль"
        {...register('confirmPassword')}
      />
      <CustomButton innerText="Зарегистрироваться" onClick={() => {}} />
    </form>
  );
};

export default CreatePasswordForm;
