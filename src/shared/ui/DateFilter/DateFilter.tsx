'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './stylesReset.scss';
import { DateRangePicker } from 'react-date-range';
import styles from './DateFilter.module.scss';
import { ru } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface DateFilterProps {}

const DateFilter: FC<DateFilterProps> = ({}) => {
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const startDate = searchParams.get('from');
  const endDate = searchParams.get('to');

  const urlStartDate = new Date(startDate || new Date());
  const urlEndDate = new Date(endDate || new Date());
  const dateRef = useRef<HTMLDivElement>(null);
  const dateRangeCalendar = dateRef.current;
  const [opened, setIsOpened] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: urlStartDate,
    endDate: urlEndDate,
    key: 'selection',
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams();
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelect = (date: any) => {
    console.log(date);
    setDateRange((prev) => ({
      ...prev,
      startDate: date.selection.startDate,
      endDate: date.selection.endDate,
    }));
    router.push(
      `${pathname}?${createQueryString(
        'from',
        date.selection.startDate
      )}&${createQueryString('to', date.selection.endDate)}`
    );
  };

  useEffect(() => {
    if (
      urlStartDate !== dateRange.startDate ||
      urlEndDate !== dateRange.endDate
    ) {
      setDateRange((prev) => ({
        ...prev,
        startDate: urlStartDate,
        endDate: urlEndDate,
      }));
    }
  }, [startDate, endDate]);

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
          {dateRange.startDate.toLocaleDateString()} {' — '}
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
