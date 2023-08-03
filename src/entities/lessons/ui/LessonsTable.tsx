'use client';

import { FC, useEffect, useState } from 'react';
import TableTemplate from '@/shared/ui/TableTemplate/ui/TableTemplate';
import { columns } from '../model/tableColumns';
import { FormatLessonsResult, Lesson, LessonsTableProps } from '../model/types';
import styles from './LessonsTableBase.module.scss';
import { useGetLessonsData } from '../api/useGetLessonsData';
import { formatLessonsData } from '../model/formatLessonsData';
import { useSearchParams } from 'next/navigation';

const LessonsTable: FC = ({}) => {
  const [lessonsData, setLessonsData] = useState<FormatLessonsResult>();
  const searchParams = useSearchParams();
  const urlPage = searchParams.get('page') || 0;

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
      startDate: '2023-08-01',
      endDate: '2023-08-01',
      page: +urlPage - 1,
      teacher: 0,
    });
  }, [urlPage]);

  useEffect(() => {
    if (lessonsResponse && groupsResponse) {
      setLessonsData(
        formatLessonsData(lessonsResponse.data, groupsResponse.data)
      );
    }
  }, [lessonsIsSuccess, groupsIsSuccess]);

  return (
    <TableTemplate
      columns={columns}
      rows={lessonsData?.lessons || []}
      rowsCount={lessonsData?.totalRows}
      isLoading={lessonsIsLoading || groupsIsLoading}
    />
  );
};

export default LessonsTable;
