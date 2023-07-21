import { FC } from 'react';
import styles from './DetailsPaper.module.scss';
import clsx from 'clsx';

interface DetailsPaperProps {
  title: string;
  text: string;
  color: 'blue' | 'violet' | 'yellow';
}

const DetailsPaper: FC<DetailsPaperProps> = ({ title, text, color }) => {
  return (
    <div
      className={clsx(
        styles.details__paper,
        color === 'blue' && styles.blue,
        color === 'violet' && styles.violet,
        color === 'yellow' && styles.yellow
      )}
    >
      <p className={styles.details__title}>{title}:</p>
      {text}
    </div>
  );
};

export default DetailsPaper;
