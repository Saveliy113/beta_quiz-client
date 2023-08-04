'use client';

import CustomOtpInput from '@/shared/ui/OtpInput/CustomOtpInput';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { formatTimer } from '@/shared/lib/formatTimer';
import { useAppSelector } from '@/appLayer/appStore';
import { OtpVerifyProps } from '../model/types';
import { useKeyPress } from 'ahooks';
import { useOtpVerify } from '../api/useOtpVerify';
import styles from './OtpVerify.module.scss';
import useNotify from '@/shared/hooks/useNotify';

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
      <AnimatePresence>
        {!checkOtpIsSuccess && (
          <motion.div
            initial={false}
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.2 }}
            variants={{
              animateState: {
                opacity: 1,
                position: 'static',
              },
              exitState: {
                opacity: 0,
                rotate: 180,
                position: 'absolute',
              },
            }}
          >
            <Image
              src="/icons/shield.svg"
              alt="Form header icon"
              style={{ objectFit: 'contain' }}
              width={100}
              height={100}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {checkOtpIsSuccess && (
        <motion.div
          initial="initialState"
          animate="animateState"
          transition={{ duration: 0.55 }}
          variants={{
            initialState: {
              rotate: 180,
              position: 'absolute',
              opacity: 0,
            },
            animateState: {
              opacity: 1,
              rotate: 360,
              position: 'static',
            },
          }}
        >
          <Image
            src="/icons/otp_success.svg"
            alt="Form header icon"
            style={{ objectFit: 'contain' }}
            width={100}
            height={100}
          />
        </motion.div>
      )}

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

          {timer === 0 && attempt <= 3 ? (
            <button onClick={timerButtonHandler} className="buttonLink">
              Отправить заново
            </button>
          ) : (
            <p
              className="subtext"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              Не пришел код? Отправить заново через{'  '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {formatTimer(timer)}
              </span>
            </p>
          )}

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
