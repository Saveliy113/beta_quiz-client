import LessonsTable from '@/entities/lessons/ui/LessonsTable';
import { FC } from 'react';

interface LessonsTableProps {}

const LessonsTableBlock: FC<LessonsTableProps> = ({}) => {
  return (
    <>
      <LessonsTable />
    </>
  );
};

export default LessonsTableBlock;
