import LoginForm from '@/features/authentication/ui/LoginForm';
import { Form } from '@/shared/ui/Form/Form';
import React from 'react';

const Authorization = () => {
  return (
    <Form
      title="Добро пожаловать!"
      subtitle="Чтобы продолжить работу с системой Beta Quiz, необходимо
      авторизоваться"
      footerText="Еще нет аккаунта?"
      linkText="Регистрация"
      linkUrl="/register"
    >
      <LoginForm />
    </Form>
  );
};

export default Authorization;
