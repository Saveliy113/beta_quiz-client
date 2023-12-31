import { FC } from 'react';
import styles from './HeaderCalendar.module.scss';
import Image from 'next/image';
// import CalendarIcon from '/public/icons/calendar.svg';
import { CalendarDays } from 'lucide-react';

interface HeaderCalendarProps {}

const HeaderCalendar: FC<HeaderCalendarProps> = ({}) => {
  return (
    <div className={styles.header__calendar}>
      <CalendarDays /> {/* <CalendarIcon /> */}
      {/* <Image src={CalendarIcon} alt="Calendar Icon" width={24} height={24} /> */}
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default HeaderCalendar;
