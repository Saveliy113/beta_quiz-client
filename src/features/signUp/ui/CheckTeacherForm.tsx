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
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import { CheckTeacherFormProps, CheckTeacherInputs } from '../model/types';
import { useSignUp } from '../api/useSignUp';

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

  const { checkTeacherIsLoading, checkTeacherIsSuccess, checkTeacher } =
    useSignUp();

  const onSubmit: SubmitHandler<CheckTeacherInputs> = (data, event) => {
    checkTeacher(
      {
        domain: data.domain,
        phone_number: data.phone,
      },
      {
        onSuccess: () => {
          dispatch(setClientInfo({ ...data, name: 'Магжан' }));
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

        {checkTeacherIsLoading ? (
          <DotsLoader />
        ) : (
          <CustomButton
            innerText="Продолжить"
            onClick={() => {}}
            rounded
            outlined
            width="fullWidth"
            disabled={
              !!errors.domain || !!errors.phone || checkTeacherIsSuccess
            }
          />
        )}
      </>
    </form>
  );
};

export default CheckTeacherForm;
