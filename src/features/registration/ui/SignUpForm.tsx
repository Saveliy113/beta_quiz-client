'use client';

import { FC, ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signUpFormSchema } from '../model/signUpFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, TextFieldProps } from '@mui/material';
import styles from './SignUpForm.module.scss';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { setClientPhone } from '../model/signUp-Slice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/appLayer/appStore';
import { AppDispatch } from '@/appLayer/appStore';

type Inputs = {
  domain: string;
  phone: string;
};

const SignUpForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phone = useAppSelector(
    (state) => state.singUpReducer.value.clientPhone
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.phone);
    dispatch(setClientPhone(data.phone));
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Домен"
        type="text"
        error={!!errors?.domain}
        helperText={errors?.domain?.message}
        {...register('domain')}
      />

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

      <p>Phone: {phone}</p>

      <CustomButton
        innerText="Продолжить"
        onClick={() => {}}
        disabled={!!errors.domain || !!errors.phone}
      />
    </form>
  );
};

export default SignUpForm;
