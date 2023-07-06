'use client';

import React, { useState } from 'react';
import styles from './OtpInput.module.scss';
import OtpInput from 'react-otp-input';
import clsx from 'clsx';

type Props = {};

const CustomOtpInput = (props: Props) => {
  const [otp, setOtp] = useState('');

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
