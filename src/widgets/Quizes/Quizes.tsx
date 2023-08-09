import QuizesFilters from '@/features/QuizesFilters/ui/QuizesFilters';
import { FC } from 'react';

interface QuizesProps {}

const Quizes: FC<QuizesProps> = ({}) => {
  return (
    <>
      <QuizesFilters />
    </>
  );
};

export default Quizes;
