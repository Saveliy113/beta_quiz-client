'use client';

import { FC, ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { checkTeacherFormSchema } from '../model/checkTeacherFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, TextFieldProps } from '@mui/material';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { setClientInfo } from '@/entities/user/model/userSlice';
import { useAppDispatch } from '@/appLayer/appStore';
import styles from './CheckTeacherForm.module.scss';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import SignUpService from '../model/signUp.service';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import {
  CheckTeacherDto,
  CheckTeacherFormProps,
  CheckTeacherInputs,
} from '../model/types';
import { AxiosError } from 'axios';

const CheckTeacherForm: FC<CheckTeacherFormProps> = ({ goNext }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckTeacherInputs>({
    resolver: zodResolver(checkTeacherFormSchema),
    mode: 'onSubmit',
  });

  const { isLoading, mutate: checkTeacher } = useMutation(
    ['checkTeacher'],
    (body: CheckTeacherDto) => SignUpService.checkTeacher(body),
    {
      onError: (error: AxiosError<{ message: string }>) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Ошибка при проверке учителя');
        }
      },
    }
  );

  const onSubmit: SubmitHandler<CheckTeacherInputs> = (data, event) => {
    checkTeacher(
      {
        domain: data.domain,
        phone_number: data.phone,
      },
      {
        onSuccess: () => {
          dispatch(setClientInfo(data));
          goNext(2);
        },
      }
    );
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <>
        <TextField
          label="Домен"
          type="text"
          fullWidth
          error={!!errors?.domain}
          helperText={errors?.domain?.message}
          {...register('domain')}
        />

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

        {isLoading ? (
          <DotsLoader />
        ) : (
          <CustomButton
            innerText="Продолжить"
            onClick={() => {}}
            disabled={!!errors.domain || !!errors.phone}
          />
        )}
      </>
    </form>
  );
};

export default CheckTeacherForm;
