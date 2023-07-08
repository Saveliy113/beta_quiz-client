'use client';

import { Form } from '@/shared/ui/Form/Form';
import CustomOtpInput from '@/shared/ui/OtpInput/CustomOtpInput';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './OtpVerify.module.scss';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';

type Props = {};

const OtpVerify = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [send, setIsSend] = useState(false);

  const onClickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSend(true);
    }, 5000);
  };

  return (
    <div className={styles.otp__container}>
      <Image
        src="/icons/shield.svg"
        alt="Form header icon"
        style={{ objectFit: 'contain' }}
        width={100}
        height={100}
      />

      {isLoading && <DotsLoader />}

      {!isLoading && !send && (
        <CustomButton innerText="Отправить код" onClick={onClickHandler} />
      )}

      {!isLoading && send && (
        <>
          <CustomOtpInput />
          <p className="subtext">
            Не пришел код? Отправить заново можно через ...
          </p>
          <CustomButton innerText="Подтвердить" onClick={() => {}} />
        </>
      )}
    </div>
  );
};

export default OtpVerify;
