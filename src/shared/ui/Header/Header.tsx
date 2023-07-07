import { FC } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import CustomIconButton from '../IconButton/CustomIconButton';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.left__wrapper}>
        <div className={styles.logo__container}>
          <Image src="/images/logo/main_logo.svg" alt="Beta-Quiz Logo" fill />
        </div>
        <CustomIconButton />
      </div>
      <div className="right_wrapper"></div>
    </header>
  );
};

export default Header;
