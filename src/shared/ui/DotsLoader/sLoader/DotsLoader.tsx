import { FC } from 'react';
import styles from './DotsLoader.module.scss';

const DotsLoader: FC = () => {
  return (
    <div className={styles.lds__roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DotsLoader;
