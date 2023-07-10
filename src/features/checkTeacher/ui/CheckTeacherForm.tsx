'use client';

import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { checkTeacherFormSchema } from '../model/checkTeacherFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, TextFieldProps } from '@mui/material';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import { setClientPhone } from '../model/checkTeacherSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/appLayer/appStore';
import { AppDispatch } from '@/appLayer/appStore';
import styles from './CheckTeacherForm.module.scss';

type Inputs = {
  domain: string;
  phone: string;
};

interface CheckTeacherFormProps {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
}

const CheckTeacherForm: FC<CheckTeacherFormProps> = ({ goNext }) => {
  const dispatch = useDispatch<AppDispatch>();
  const phone = useAppSelector((state) => state.signUp.value.clientPhone);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(checkTeacherFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.phone);
    dispatch(setClientPhone(data.phone));
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <>
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

        <CustomButton
          innerText="Продолжить"
          onClick={() => goNext(2)}
          disabled={!!errors.domain || !!errors.phone}
        />
      </>
    </form>
  );
};

export default CheckTeacherForm;
