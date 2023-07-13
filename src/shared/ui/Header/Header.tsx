import { FC } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import CustomIconButton from '../IconButton/CustomIconButton';
import HeaderCalendar from '../HeaderCalendar.tsx/HeaderCalendar';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.left__wrapper}>
        <div className={styles.logo__container}>
          <Image src="/images/logo/main_logo.svg" alt="Beta-Quiz Logo" fill />
        </div>
        {/* <CustomIconButton /> */}
      </div>
      <div className={styles.right__wrapper}>
        <HeaderCalendar />
      </div>
    </header>
  );
};

export default Header;
