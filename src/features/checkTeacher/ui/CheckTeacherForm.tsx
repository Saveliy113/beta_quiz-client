'use client';

import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { checkTeacherFormSchema } from '../model/checkTeacherFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, TextFieldProps } from '@mui/material';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { setClientInfo } from '../model/checkTeacherSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/appLayer/appStore';
import { AppDispatch } from '@/appLayer/appStore';
import styles from './CheckTeacherForm.module.scss';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import SignUpService, { CheckTeacherDto } from '../model/checkTeacher.service';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';

type Inputs = {
  domain: string;
  phone: string;
};

interface CheckTeacherFormProps {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
}

const CheckTeacherForm: FC<CheckTeacherFormProps> = ({ goNext }) => {
  const dispatch = useAppDispatch();
  const clientInfo = useAppSelector((state) => state.signUp);
  console.log(clientInfo);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(checkTeacherFormSchema),
    mode: 'onSubmit',
  });

  const { isLoading, isError, isSuccess, error, mutate } = useMutation(
    ['checkTeacher'],
    (body: CheckTeacherDto) => SignUpService.checkTeacher(body)
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(
      {
        domain: data.domain,
        phone_number: data.phone,
      },
      {
        onSuccess: () => {
          dispatch(setClientInfo(data));
          goNext(2);
        },
        onError(error, variables, context) {
          toast.error(error.response.data.message);
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
            // onClick={() => {
            //   toast.success('Teacher is in a database');
            //   goNext(2);
            // }}
            disabled={!!errors.domain || !!errors.phone}
          />
        )}
      </>
    </form>
  );
};

export default CheckTeacherForm;
