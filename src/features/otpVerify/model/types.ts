import { Dispatch, SetStateAction } from 'react';

export type SendOtpDto = { phone: string };
export type CheckOtpDto = { phone: string; otp: string };
export interface OtpVerifyProps {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
  //Use redirect if otp verify is the last step in form
  redirect?: string;
}

export interface UseOtpVerifyProps extends OtpVerifyProps {
  setAttempt: Dispatch<SetStateAction<number>>;
}
