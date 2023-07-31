import React from 'react';
import styles from './lessons.module.scss';
import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import LessonsTable from '@/widgets/LessonsTable/ui/LessonsTable';
import DateFilter from '@/shared/ui/DateFilter/DateFilter';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ContentHeader text="Уроки" />
      <DateFilter />
      <LessonsTable />
    </>
  );
};

export default page;
