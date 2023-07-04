import Image from 'next/image';
import logo from '../../../public/images/logo/main_logo.svg';
import styles from './page.module.scss';
import { Form } from '@/shared/ui/Form/Form';
import Authorization from '@/widgets/Authorization/Authorization';

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="Beta-Quiz Logo" />
      </div>
      <Authorization />
    </div>
  );
}
