import { FC, ReactNode } from 'react';
import styles from './ContentHeader.module.scss';

interface ContentHeaderProps {
  text: string;
  children?: ReactNode;
}

const ContentHeader: FC<ContentHeaderProps> = ({ text, children }) => {
  return (
    <div className={styles.content__header}>
      <div className={styles.header__wrapper}>
        <h1>{text}</h1>
        {children && <div className={styles.filter__slot}>{children}</div>}
      </div>
      <hr />
    </div>
  );
};

export default ContentHeader;
