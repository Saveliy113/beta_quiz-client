import { FC, ReactNode } from 'react';
import styles from './CardInfoHeader.module.scss';

interface CardInfoHeaderProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

const CardInfoHeader: FC<CardInfoHeaderProps> = ({ icon, text, className }) => {
  return (
    <div className={`${styles.info__header} ${className}`}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default CardInfoHeader;
