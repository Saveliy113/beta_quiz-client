'use client';

import { Form } from '@/shared/ui/Form/Form';
import { CheckTeacherForm } from '@/features/checkTeacher';
import { useState } from 'react';
import OtpVerify from '@/features/otpVerify/ui/OtpVerify';
import CreatePasswordForm from '@/features/signUp/ui/CreatePasswordForm';

const Registration = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const formTitles = {
    firstStepTitle: 'Введите домен AlfaCRM и телефон',
    secondStepTitle: 'Подвердите телефон по СМС',
    thirdStepTitle: 'Придумайте пароль',
  };

  return (
    <Form
      title="Регистрация"
      subtitle={
        (step === 1 && formTitles.firstStepTitle) ||
        (step === 2 && formTitles.secondStepTitle) ||
        (step === 3 && formTitles.thirdStepTitle)
      }
      footerText={step === 1 ? 'Уже есть аккаунт?' : ''}
      linkText="Войти"
      linkUrl={step === 1 ? '/signin' : ''}
    >
      {step === 1 && <CheckTeacherForm goNext={setStep} />}
      {step === 2 && <OtpVerify goNext={setStep} />}
      {step === 3 && <CreatePasswordForm />}
    </Form>
  );
};

export default Registration;
