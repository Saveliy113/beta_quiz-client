import { Dispatch, SetStateAction } from 'react';

export type CheckTeacherInputs = {
  domain: string;
  phone: string;
};

export type CreatePasswordInputs = {
  password: string;
  confirmPassword: string;
};

export type CheckTeacherFormProps = {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
};

export type CreateTeacherDto = {
  domain: string;
  phone: string;
  password: string;
};

export type CheckTeacherDto = {
  domain: string;
  phone_number: string;
};
