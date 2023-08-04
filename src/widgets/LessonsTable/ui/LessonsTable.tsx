'use client';

import { FC, useEffect, useState } from 'react';
import TableTemplate from '@/shared/ui/TableTemplate/ui/TableTemplate';
import { columns } from '../model/tableColumns';
import { FormatLessonsResult } from '../model/types';
import { useGetLessonsData } from '../api/useGetLessonsData';
import { formatLessonsData } from '../model/formatLessonsData';
import { useSearchParams } from 'next/navigation';
import DateFilter from '@/shared/ui/DateFilter/DateFilter';
import { formatDate } from '../../../shared/lib/formatDate';
import styles from './LessonsTableBase.module.scss';

const LessonsTable: FC = ({}) => {
  const [lessonsData, setLessonsData] = useState<FormatLessonsResult>();
  const searchParams = useSearchParams();
  const urlPage = searchParams.get('page') || 0;
  const fromDate = searchParams.get('from');
  const toDate = searchParams.get('to');

  const {
    getGroups,
    getLessons,
    groupsIsLoading,
    groupsIsSuccess,
    lessonsIsLoading,
    lessonsIsSuccess,
    lessonsResponse,
    groupsResponse,
  } = useGetLessonsData();

  useEffect(() => {
    getGroups({
      domain: 'metastudy',
      teacher: 0,
    });
    getLessons({
      domain: 'metastudy',
      startDate: formatDate(fromDate),
      endDate: formatDate(toDate),
      page: +urlPage ? +urlPage - 1 : +urlPage,
      teacher: 0,
    });
  }, [urlPage, fromDate, toDate]);

  useEffect(() => {
    if (lessonsResponse && groupsResponse) {
      setLessonsData(
        formatLessonsData(lessonsResponse.data, groupsResponse.data)
      );
    }
  }, [lessonsIsSuccess, groupsIsSuccess]);

  return (
    <>
      <div style={{ width: '95%', margin: '0 auto', marginBottom: '30px' }}>
        <DateFilter />
      </div>
      <TableTemplate
        columns={columns}
        rows={lessonsData?.lessons || []}
        rowsCount={lessonsData?.totalRows}
        isLoading={lessonsIsLoading || groupsIsLoading}
      />
    </>
  );
};

export default LessonsTable;
