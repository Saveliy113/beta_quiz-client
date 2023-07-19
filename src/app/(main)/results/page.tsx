import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import CustomAccordion from '@/shared/ui/CustomAccordion/CustomAccordion';
import ResultsHeader from '@/widgets/ResultsHeader/ResultsHeader';
import { FC } from 'react';
import styles from './results.module.scss';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ResultsHeader />
      <div className={styles.content}>
        <CustomAccordion />
      </div>
    </>
  );
};

export default page;
