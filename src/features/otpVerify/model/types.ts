import { Dispatch, SetStateAction } from 'react';

export type SendOtpDto = { phone: string };
export type CheckOtpDto = { phone: string; otp: string };
export type OtpVerifyProps = {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
};
