import { FC } from 'react';
import styles from './ContentHeader.module.scss';

interface ContentHeaderProps {
  text: string;
}

const ContentHeader: FC<ContentHeaderProps> = ({ text }) => {
  return (
    <div className={styles.content__header}>
      <h1>{text}</h1>
      <hr />
    </div>
  );
};

export default ContentHeader;
