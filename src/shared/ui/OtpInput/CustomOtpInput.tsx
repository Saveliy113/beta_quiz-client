'use client';

import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './OtpInput.module.scss';
import OtpInput from 'react-otp-input';
import clsx from 'clsx';

type CustomOtpInputProps = {
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
};

const CustomOtpInput: FC<CustomOtpInputProps> = ({ otp, setOtp }) => {
  const inputStyles = clsx(styles.otpInput, otp[0] && 'filled_1');

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      shouldAutoFocus
      inputStyle={inputStyles}
      containerStyle={styles.otpContainer}
      renderInput={(props) => <input {...props} required />}
    />
  );
};

export default CustomOtpInput;
