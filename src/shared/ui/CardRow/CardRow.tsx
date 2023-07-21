import { FC } from 'react';
import styles from './CardRow.module.scss';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

interface CardRowProps {
  text: string;
  href: string;
}

const CardRow: FC<CardRowProps> = ({ text, href }) => {
  return (
    <div className={styles.card__row}>
      <p>{text}</p>
      <Link href={href} className={styles.row__btn}>
        <MoveRight />
      </Link>
    </div>
  );
};

export default CardRow;
