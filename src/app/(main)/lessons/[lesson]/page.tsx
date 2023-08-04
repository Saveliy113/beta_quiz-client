import { FC } from 'react';
import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import LessonCard from '@/entities/lesson/ui/LessonCard';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ContentHeader text="Урок ALA_M_6KOY_A (5) Математика" />
      <LessonCard />
    </>
  );
};

export default page;
