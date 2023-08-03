'use client';

import { FC, useEffect, useState } from 'react';
import TableTemplate from '@/shared/ui/TableTemplate/TableTemplate';
import { columns } from '../model/tableColumns';
import { FormatLessonsResult, Lesson, LessonsTableProps } from '../model/types';
import styles from './LessonsTableBase.module.scss';
import { useGetLessonsData } from '../api/useGetLessonsData';
import { formatLessonsData } from '../model/formatLessonsData';

const LessonsTable: FC = ({}) => {
  const [lessonsData, setLessonsData] = useState<FormatLessonsResult>();
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
      page: 0,
      teacher: 0,
    });
  }, []);

  useEffect(() => {
    if (lessonsResponse && groupsResponse) {
      console.log('GROUPS: ', groupsResponse);
      console.log('LESSONS: ', lessonsResponse);
      const { lessons, totalRows, totalPages } = formatLessonsData(
        lessonsResponse.data,
        groupsResponse.data
      );
      console.log('TOTAL ROWS: ', totalRows);
      console.log('TOTAL Pages: ', totalPages);
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
