import { FC, ReactNode } from 'react';
import styles from './CardInfoHeader.module.scss';

interface CardInfoHeaderProps {
  children: ReactNode;
  text: string;
  className?: string;
}

const CardInfoHeader: FC<CardInfoHeaderProps> = ({
  children,
  text,
  className,
}) => {
  return (
    <div className={`${styles.info__header} ${className}`}>
      {children}
      <p>{text}</p>
    </div>
  );
};

export default CardInfoHeader;
