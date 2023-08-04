'use client';

import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '@/appLayer/appStore';
import CustomOtpInput from '@/shared/ui/OtpInput/CustomOtpInput';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import { OtpVerifyProps } from '../model/types';
import { useKeyPress } from 'ahooks';
import { useOtpVerify } from '../api/useOtpVerify';
import useNotify from '@/shared/hooks/useNotify';
import FormResendBlock from '@/shared/ui/FormResendBlock/FormResendBlock';
import AnimatedShieldIcon from '@/shared/ui/AnimatedShieldIcon/AnimatedShieldIcon';
import styles from './OtpVerify.module.scss';

const OtpVerify: FC<OtpVerifyProps> = ({ goNext, redirect }) => {
  const { notify } = useNotify();
  const [timer, setTimer] = useState<number>(59000);
  const [attempt, setAttempt] = useState<number>(0);
  const [otp, setOtp] = useState('');
  const clientPhone = useAppSelector((state) => state.user.phone);

  const {
    sendOtpIsLoading,
    sendOtpIsSuccess,
    sendOtp,
    checkOtpIsLoading,
    checkOtpIsSuccess,
    checkOtp,
  } = useOtpVerify({ goNext, setAttempt, redirect });

  //------------------------------HANDLERS---------------------------//
  const sendOtpHandler = () => {
    sendOtp({ phone: '+' + clientPhone.replace(/\D/g, '') });
  };

  const checkOtpHandler = () => {
    checkOtp({ otp: otp, phone: '+' + clientPhone.replace(/\D/g, '') });
  };

  const timerButtonHandler = () => {
    if (attempt >= 3) {
      notify({ error: true, message: 'Попробуйте пройти регистрацию заново' });
      setTimeout(() => location.reload(), 2000);
      return;
    }
    setTimer(300000);
    sendOtpHandler();
  };

  // This hook reacts on Enter button. If user haven't sent otp yet it will send otp by pressing enter
  // After first attempt it will send query to check otp
  useKeyPress('Enter', () => {
    if (attempt === 0) {
      sendOtpHandler();
    } else {
      checkOtpHandler();
    }
  });

  // This useEffect makes timer work. After successful otp sending it will create interval
  // which will update timer state every second
  useEffect(() => {
    let timerId: any;
    if (sendOtpIsSuccess) {
      timerId = setInterval(() => setTimer((timer) => timer - 1000), 1000);
    }
    if (timer === 0) {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [sendOtpIsSuccess, timer]);

  return (
    <div className={styles.otp__container}>
      <AnimatedShieldIcon success={checkOtpIsSuccess} />
      {!sendOtpIsLoading && !sendOtpIsSuccess && attempt < 1 && (
        <CustomButton
          innerText="Отправить код"
          onClick={sendOtpHandler}
          rounded
          outlined
          width="fullWidth"
        />
      )}

      {sendOtpIsLoading && attempt < 1 && <DotsLoader />}

      {attempt > 0 && (
        <>
          <CustomOtpInput otp={otp} setOtp={setOtp} />
          <FormResendBlock
            attempt={attempt}
            timerState={timer}
            resendButtonHandler={timerButtonHandler}
          />

          {checkOtpIsLoading ? (
            <DotsLoader />
          ) : (
            <CustomButton
              innerText="Подтвердить"
              onClick={checkOtpHandler}
              rounded
              outlined
              width="fullWidth"
              disabled={checkOtpIsLoading || checkOtpIsSuccess}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OtpVerify;
