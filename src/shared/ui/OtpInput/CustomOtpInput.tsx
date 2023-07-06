'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './OtpInput.module.scss';
import OtpInput from 'react-otp-input';
import clsx from 'clsx';

type Props = {};

const CustomOtpInput = (props: Props) => {
  const [otp, setOtp] = useState('');

  const handleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

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

/*
let currentOtpIndex: number = 0;
const OtpInput: FC<Props> = (props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOtp, setActiveOtp] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOtp(currentOtpIndex - 1);
    } else {
      setActiveOtp(currentOtpIndex + 1);
    }

    setOtp(newOtp);
  };

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (event.key === 'Backspace') {
      setActiveOtp(currentOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtp]);

  return (
    <div className={styles.otpContainer}>
      {otp.map((_, i) => (
        <input
          ref={activeOtp === i ? inputRef : null}
          className={styles.otpInput}
          key={i}
          type="number"
          onChange={(event) => handleInputChange(event)}
          onKeyDown={(event) => handleOnKeyDown(event, i)}
          value={otp[i]}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OtpInput;

if (!value) {
  target.classList.remove('filled');
  setActiveOtp(activeOtp - 1);
} else {
  target.classList.add('filled');
  setActiveOtp(activeOtp + 1);
}
*/
