import { Form } from '@/shared/ui/Form/Form';
import { SignUpForm } from '@/features/registration';

const Registration = () => {
  return (
    <Form
      title="Регистрация"
      subtitle="Для регистрации введите домен AlfaCRM, телефон и пароль"
      footerText="Уже есть аккаунт?"
      linkText="Войти"
      linkUrl="/signin"
    >
      <SignUpForm />
    </Form>
  );
};

export default Registration;
