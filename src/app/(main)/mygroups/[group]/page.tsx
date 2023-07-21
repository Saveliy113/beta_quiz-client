import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import { FC } from 'react';
import styles from './group.module.scss';
import ContentPaper from '@/shared/ui/ContentPaper/ContentPaper';
import CardInfoHeader from '@/shared/ui/CardInfoHeader/CardInfoHeader';
import { ListTodo } from 'lucide-react';
import CardRow from '@/shared/ui/CardRow/CardRow';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ContentHeader text="Группа ALA_E_3KOY_Z" />
      <div className={styles.content}>
        <ContentPaper>
          <CardInfoHeader
            icon={<ListTodo />}
            text="Квизы группы ALA_E_3KOY_Z"
            className={styles.quiz__header}
          />
          <CardRow text="1. 03.03.2023, Физика / сопротивление" href="#" />
          <CardRow text="1. 03.03.2023, Физика / сопротивление" href="#" />
          <CardRow text="1. 03.03.2023, Физика / сопротивление" href="#" />
          <CardRow text="1. 03.03.2023, Физика / сопротивление" href="#" />
        </ContentPaper>
      </div>
    </>
  );
};

export default page;
