'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './OtpInput.module.scss';

type Props = {};

const OtpInput: FC<Props> = (props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOtp, setActiveOtp] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef);

    inputRef.current?.focus();
  }, [activeOtp]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.value) {
      event.target.classList.add('filled');
    } else event.target.classList.remove('filled');

    setOtp((oldOtp) => {
      const newOtp = [...otp];
      newOtp[index] = event.target.value.substring(
        event.target.value.length - 1
      );
      return newOtp;
    });
    setActiveOtp(activeOtp + 1);
  };
  console.log(otp);

  return (
    <div className={styles.otpContainer}>
      {otp.map((_, i) => (
        <input
          ref={activeOtp === i ? inputRef : null}
          className={styles.otpInput}
          key={i}
          type="number"
          onChange={(event) => handleInputChange(event, i)}
          value={otp[i]}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OtpInput;
