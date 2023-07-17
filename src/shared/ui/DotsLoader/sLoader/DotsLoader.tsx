import { FC } from 'react';
import styles from './DotsLoader.module.scss';

const DotsLoader: FC = () => {
  return (
    <div className={styles.loading__spinner}>
      <div className={styles.ldio}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DotsLoader;
