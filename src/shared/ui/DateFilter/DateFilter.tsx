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
  const [opened, setIsOpened] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (date: any) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };
  console.log('Opened: ', opened);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dateRef && dateRef.current) {
      dateRef.current.addEventListener('mouseenter', () => {
        console.log('MouseEnter');
        setIsOpened((prev) => !prev);
      });
      dateRef.current.addEventListener('mouseleave', () => {
        console.log('MouseLeave');
        setIsOpened((prev) => !prev);
      });
    }
  }, []);

  return (
    <>
      <div className={styles.date__wrapper} ref={dateRef}>
        <div className={styles.date__label}>
          <Calendar />
          {startDate.toLocaleDateString()} — {endDate.toLocaleDateString()}
        </div>
        {opened && (
          <DateRangePicker
            locale={ru}
            ranges={[selectionRange]}
            onChange={handleSelect}
            staticRanges={[]}
            inputRanges={[]}
            className={styles.date__range}
            showDateDisplay={false}
          />
        )}
      </div>

      {/* <button onClick={() => setIsOpened((prev) => !prev)}>Hide</button> */}
    </>
  );
};

export default DateFilter;
