'use client';

import { FC, useEffect, useState } from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar: FC = ({}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 0 : prevProgress + 10;
      });

      return () => clearInterval(interval);
    }, 600);
  }, []);

  return (
    <div className={styles.loading__container}>
      <div
        className={styles.loading__bar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
