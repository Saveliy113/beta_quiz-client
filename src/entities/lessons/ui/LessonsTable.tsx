'use client';

import { FC } from 'react';
import TableTemplate from '@/shared/ui/TableTemplate/TableTemplate';
import { columns } from '../model/tableColumns';
import { LessonsTableProps } from '../model/types';
import styles from './LessonsTableBase.module.scss';

const LessonsTable: FC = ({}) => {
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
