import { QuizesFilters } from '@/features/QuizesFilters';
import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ContentHeader text="Квизы" />
      <QuizesFilters />
    </>
  );
};

export default page;
