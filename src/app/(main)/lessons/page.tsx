import React from 'react';
import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import LessonsTable from '@/widgets/LessonsTable/ui/LessonsTable';
import styles from './lessons.module.scss';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ContentHeader text="Уроки" />
      <LessonsTable />
    </>
  );
};

export default page;
