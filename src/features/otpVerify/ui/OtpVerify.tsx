'use client';

import { Form } from '@/shared/ui/Form/Form';
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
import OtpService, {
  CheckOtpDto,
  SendOtpDto,
} from '../model/otpVerify.service';
import { useAppSelector } from '@/appLayer/appStore';

type OtpVerifyProps = {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
};

const OtpVerify: FC<OtpVerifyProps> = ({ goNext }) => {
  const [timer, setTimer] = useState<number>(59000);
  const { notify } = useNotify();

  const {
    isSuccess: sendOtpIsSuccess,
    isLoading: sendOtpIsLoading,
    isError: sendOtpIsError,
    error: sendOtpError,
    mutate: sendOtp,
  } = useMutation(['sendOtp'], (body: SendOtpDto) => OtpService.sendOtp(body));

  const {
    isSuccess: checkOtpIsSuccess,
    isLoading: checkOtpIsLoading,
    isError: checkOtpIsError,
    error: checkOtpError,
    mutate: checkOtp,
  } = useMutation(['checkOtp'], (body: CheckOtpDto) =>
    OtpService.verifyOtp(body)
  );

  const clientPhone = useAppSelector((state) => state.signUp.phone);
  console.log('Client phone: ', clientPhone);
  const sendOtpHandler = () => {
    sendOtp({ phone: '+' + clientPhone.replace(/\D/g, '') });
  };
  const checkOtpHandler = () => {};

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
            transition={{ duration: 0.4 }}
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
          transition={{ duration: 0.75 }}
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

      {!sendOtpIsLoading && !sendOtpIsSuccess && (
        <CustomButton innerText="Отправить код" onClick={sendOtpHandler} />
      )}

      {!sendOtpIsLoading && sendOtpIsSuccess && (
        <>
          <CustomOtpInput />
          {timer === 0 ? (
            <button onClick={() => setTimer(300000)}>Отправить заново</button>
          ) : (
            <p
              className="subtext"
              style={{
                marginTop: 30,
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

          {sendOtpIsLoading || (checkOtpIsLoading && <DotsLoader />)}

          {!checkOtpIsLoading && !checkOtpIsSuccess && (
            <CustomButton innerText="Подтвердить" onClick={() => goNext(3)} />
          )}
        </>
      )}
    </div>
  );
};

export default OtpVerify;
