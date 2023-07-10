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

type OtpVerifyProps = {
  goNext: Dispatch<SetStateAction<1 | 2 | 3>>;
};

const OtpVerify: FC<OtpVerifyProps> = ({ goNext }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [send, setIsSend] = useState(false);
  const [timer, setTimer] = useState<number>(59000);
  const { notify } = useNotify();

  const onClickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSend(true);
    }, 2000);
  };

  useEffect(() => {
    let timerId: any;
    if (send) {
      timerId = setInterval(() => setTimer((timer) => timer - 1000), 1000);
    }
    if (timer === 0) {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [send, timer]);

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
          {timer === 0 ? (
            <button onClick={() => setTimer(500000)}>Отправить заново</button>
          ) : (
            <p className="subtext" style={{ marginTop: 30 }}>
              Не пришел код? Отправить заново можно через{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {timer / 1000}
              </span>
            </p>
          )}
          <CustomButton innerText="Подтвердить" onClick={() => goNext(3)} />
        </>
      )}
    </div>
  );
};

export default OtpVerify;
