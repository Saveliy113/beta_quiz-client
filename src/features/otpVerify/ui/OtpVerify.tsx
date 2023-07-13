'use client';

import CustomOtpInput from '@/shared/ui/OtpInput/CustomOtpInput';
import Image from 'next/image';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styles from './OtpVerify.module.scss';
import CustomButton from '@/shared/ui/CustomButton/CustomButton';
import DotsLoader from '@/shared/ui/DotsLoader/sLoader/DotsLoader';
import useNotify from '@/shared/hooks/useNotify';
import { motion, AnimatePresence } from 'framer-motion';
import { formatTimer } from '@/shared/lib/formatTimer';
import { useMutation } from '@tanstack/react-query';
import { useAppSelector } from '@/appLayer/appStore';
import { AxiosError } from 'axios';
import { CheckOtpDto, OtpVerifyProps, SendOtpDto } from '../model/types';
import OtpService from '../model/otpVerify.service';
import { useKeyPress } from 'ahooks';
import { useRouter } from 'next/navigation';

const OtpVerify: FC<OtpVerifyProps> = ({ goNext, redirect }) => {
  const { notify } = useNotify();
  const router = useRouter();
  const [timer, setTimer] = useState<number>(59000);
  const [attempt, setAttempt] = useState<number>(0);

  const [otp, setOtp] = useState('');
  const clientPhone = useAppSelector((state) => state.signUp.phone);

  //------------------------------Queries------------------------------//

  const {
    isSuccess: sendOtpIsSuccess,
    isLoading: sendOtpIsLoading,
    mutate: sendOtp,
  } = useMutation(['sendOtp'], (body: SendOtpDto) => OtpService.sendOtp(body), {
    onSuccess: () => {
      setAttempt((prev) => prev + 1);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        notify({ error: true, message: error.response.data.message });
      } else {
        notify({ error: true, message: 'Ошибка при отправке кода' });
      }
    },
  });

  const {
    isSuccess: checkOtpIsSuccess,
    isLoading: checkOtpIsLoading,
    mutate: checkOtp,
  } = useMutation(
    ['checkOtp'],
    (body: CheckOtpDto) => OtpService.verifyOtp(body),
    {
      onSuccess: () => {
        setTimeout(() => {
          if (redirect) {
            router.push(redirect);
          }
          goNext(3);
        }, 1000);
      },
      onError: (error: AxiosError<{ message: string }>) => {
        if (error.response) {
          notify({ error: true, message: error.response.data.message });
        } else {
          notify({ error: true, message: 'Ошибка при проверке кода' });
        }
      },
    }
  );

  //--------------------------------------------------------------------//

  //------------------------------Handlers------------------------------//
  const sendOtpHandler = () => {
    sendOtp({ phone: '+' + clientPhone.replace(/\D/g, '') });
  };

  useKeyPress('Enter', () => {
    if (attempt === 0) {
      sendOtpHandler();
    } else {
      checkOtpHandler();
    }
  });

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
  //--------------------------------------------------------------------//

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

  //--------------------------------------------------------------------//

  //------------------------------Component------------------------------//

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
        <CustomButton innerText="Отправить код" onClick={sendOtpHandler} />
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
              disabled={checkOtpIsLoading || checkOtpIsSuccess}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OtpVerify;
