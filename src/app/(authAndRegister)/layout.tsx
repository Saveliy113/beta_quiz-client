import { ReactNode } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo/main_logo.svg';
import styles from './signin/page.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="Beta-Quiz Logo" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
