import { ReactNode } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo/main_logo.svg';
import styles from './signin/page.module.scss';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logo__link}>
          <Image src={logo} alt="Beta-Quiz Logo" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
