import { useMutation } from '@tanstack/react-query';
import { CheckOtpDto, SendOtpDto, UseOtpVerifyProps } from '../model/types';
import OtpService from './otpVerify.service';
import useNotify from '@/shared/hooks/useNotify';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export const useOtpVerify = ({
  goNext,
  setAttempt,
  redirect,
}: UseOtpVerifyProps) => {
  const { notify } = useNotify();
  const router = useRouter();

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

  return {
    sendOtpIsSuccess,
    sendOtpIsLoading,
    sendOtp,
    checkOtpIsSuccess,
    checkOtpIsLoading,
    checkOtp,
  };
};
