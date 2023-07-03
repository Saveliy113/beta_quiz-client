import Image from 'next/image';
import logo from '../../../public/images/logo/main_logo.svg';
import styles from './page.module.scss';
import { Form } from '@/shared/ui/Form/Form';

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="Beta-Quiz Logo" />
      </div>
      <Form
        title="Добро пожаловать!"
        subtitle="Чтобы продолжить работу с системой Beta Quiz, необходимо
          авторизоваться"
        footerText="Еще нет аккаунта?"
        linkText="Регистрация"
        linkUrl="/register"
      />
    </div>
  );
}
