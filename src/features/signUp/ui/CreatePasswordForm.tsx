'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPasswordFormSchema } from '../model/creastePasswordFromSchema';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { useAppSelector } from '@/appLayer/appStore';
import { CreatePasswordInputs } from '../model/types';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import { useSignUp } from '../api/useSignUp';
import styles from './CreatePasswordForm.module.scss';

const CreatePasswordForm: FC = () => {
  const domain = useAppSelector((state) => state.user.domain);
  const phone = useAppSelector((state) => state.user.phone);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePasswordInputs>({
    resolver: zodResolver(createPasswordFormSchema),
    mode: 'onSubmit',
  });

  const { createTeacherIsLoading, createTeacherIsSuccess, createTeacher } =
    useSignUp();

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
      {createTeacherIsLoading ? (
        <DotsLoader />
      ) : (
        <CustomButton
          width="fullWidth"
          innerText="Зарегистрироваться"
          onClick={() => {}}
          rounded
          outlined
          disabled={createTeacherIsLoading || createTeacherIsSuccess}
        />
      )}
    </form>
  );
};

export default CreatePasswordForm;
