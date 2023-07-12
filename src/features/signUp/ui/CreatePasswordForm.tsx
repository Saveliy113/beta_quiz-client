'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPasswordFormSchema } from '../model/creastePasswordFromSchema';
import styles from './CreatePasswordForm.module.scss';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import CreatePasswordService, {
  CreateTeacherDto,
} from '../model/createPassword.service';
import useNotify from '@/shared/hooks/useNotify';
import { useMutation } from '@tanstack/react-query';
import { useAppSelector } from '@/appLayer/appStore';
import { useRouter } from 'next/navigation';

type Inputs = {
  password: string;
  confirmPassword: string;
};

interface CreatePasswordForm {}

const CreatePasswordForm: FC<CreatePasswordForm> = ({}) => {
  const { notify } = useNotify();
  const domain = useAppSelector((state) => state.signUp.domain);
  const phone = useAppSelector((state) => state.signUp.phone);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createPasswordFormSchema),
    mode: 'onSubmit',
  });

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    mutate: createTeacher,
  } = useMutation(
    ['createTeacher'],
    (body: CreateTeacherDto) => CreatePasswordService.createTeacher(body),
    {
      onSuccess: () => {
        notify({
          success: true,
          message:
            'Вы успешно зарегистрированы. Сейчас вы будете перенаправлены на страницу авторизации',
        });
        setTimeout(() => router.push('/signin'), 2000);
      },
      onError: (error) => {
        notify({ error: true, message: error.response.data.message });
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = ({ password }) => {
    console.log(domain, phone, password);
    // createTeacher({ domain, phone, password: data.password });
  };

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
      <CustomButton
        innerText="Зарегистрироваться"
        onClick={() => {}}
        disabled={isLoading || isSuccess}
      />
    </form>
  );
};

export default CreatePasswordForm;
