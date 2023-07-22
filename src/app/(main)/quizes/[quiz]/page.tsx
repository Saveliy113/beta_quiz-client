import { FC } from 'react';
import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import styles from './quiz.module.scss';
import DetailsPaper from '@/shared/ui/DetailsPaper/DetailsPaper';
import ContentPaper from '@/shared/ui/ContentPaper/ContentPaper';
import CardInfoHeader from '@/shared/ui/CardInfoHeader/CardInfoHeader';
import { ListTodo } from 'lucide-react';
import CardRow from '@/shared/ui/CardRow/CardRow';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ContentHeader text="Квиз 03.03.2023" />
      <div className={styles.quiz__details}>
        <DetailsPaper title="Предмет" text="Математика" color="blue" />
        <DetailsPaper title="Тема" text="Проценты" color="violet" />
        <DetailsPaper title="Студентов" text="17 / 20" color="yellow" />
      </div>

      <div className={styles.content__wrapper}>
        <ContentPaper>
          <CardInfoHeader
            icon={<ListTodo />}
            text="Результаты учеников"
            className={styles.quiz__header}
          />
          <CardRow href="#" text="1. Дамир Қайратұлы, 20/20" />
          <CardRow href="#" text="2. Абдулдаев Мағжан, 18/20" />
          <CardRow href="#" text="3. Дамир Қайратұлы, 18/20" />
          <CardRow href="#" text="4. Дуйсен Сара,   17/20" />
        </ContentPaper>
      </div>
    </>
  );
};

export default page;
