'use client';

import { FC, useEffect, useRef, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './stylesReset.scss';
import { DateRangePicker } from 'react-date-range';
import styles from './DateFilter.module.scss';
import { ru } from 'date-fns/locale';
import { Calendar } from 'lucide-react';

interface DateFilterProps {}

const DateFilter: FC<DateFilterProps> = ({}) => {
  const dateRef = useRef<HTMLDivElement>(null);
  const dateRangeCalendar = dateRef.current;
  const [opened, setIsOpened] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (date: any) => {
    setDateRange((prev) => ({
      ...prev,
      startDate: date.selection.startDate,
      endDate: date.selection.endDate,
    }));
  };

  const toggleCalendar = () => {
    setIsOpened((prev) => !prev);
  };

  useEffect(() => {
    if (dateRangeCalendar) {
      dateRangeCalendar.addEventListener('mouseenter', toggleCalendar);
      dateRangeCalendar.addEventListener('mouseleave', toggleCalendar);
    }

    return () => {
      if (dateRangeCalendar) {
        dateRangeCalendar.removeEventListener('mouseenter', toggleCalendar);
        dateRangeCalendar.removeEventListener(
          'mouseleave',
          () => toggleCalendar
        );
      }
    };
  }, [dateRangeCalendar]);

  return (
    <>
      <div className={styles.date__wrapper} ref={dateRef}>
        <div className={styles.date__label}>
          <Calendar />
          {dateRange.startDate.toLocaleDateString()} —{' '}
          {dateRange.endDate.toLocaleDateString()}
        </div>
        {opened && (
          <DateRangePicker
            locale={ru}
            ranges={[dateRange]}
            onChange={handleSelect}
            staticRanges={[]}
            inputRanges={[]}
            className={styles.date__range}
            showDateDisplay={false}
          />
        )}
      </div>
    </>
  );
};

export default DateFilter;
