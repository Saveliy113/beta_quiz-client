'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './OtpInput.module.scss';

type Props = {};

const OtpInput: FC<Props> = (props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOtp, setActiveOtp] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(activeOtp);

    inputRef.current?.focus();
  }, [activeOtp]);

  const handleInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = target;

    if (!value) {
      target.classList.remove('filled');
      setActiveOtp(activeOtp - 1);
    } else {
      target.classList.add('filled');
      setActiveOtp(activeOtp + 1);
    }

    setOtp((oldOtp) => {
      const newOtp = [...oldOtp];
      newOtp[index] = value.substring(value.length - 1);
      return newOtp;
    });
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
