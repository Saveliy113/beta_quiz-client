'use client';

import { FC, useEffect } from 'react';
import TableTemplate from '@/shared/ui/TableTemplate/TableTemplate';
import { columns } from '../model/tableColumns';
import { LessonsTableProps } from '../model/types';
import styles from './LessonsTableBase.module.scss';
import { useGetLessonsData } from '../api/useGetLessonsData';
import { formatLessonsData } from '../model/formatLessonsData';

const LessonsTable: FC = ({}) => {
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
      console.log(formatLessonsData(lessonsResponse.data, groupsResponse.data));
    }
  }, [lessonsIsSuccess, groupsIsSuccess]);

  return (
    <TableTemplate
      columns={columns}
      rows={[
        {
          id: 1,
          date: '01.01.2023',
          time: '08:00',
          group: 'ALA_3_KZOY_1',
          lesson: 'Математика',
        },
      ]}
    />
  );
};

export default LessonsTable;
