import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import { FC } from 'react';
import styles from './lesson.module.scss';
import CardInfoHeader from '@/shared/ui/CardInfoHeader/CardInfoHeader';
import { HelpCircle, Users2 } from 'lucide-react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ContentHeader text="Урок ALA_M_6KOY_A (5) Математика" />
      <div className={styles.card}>
        <div className={styles.info__wrapper}>
          <CardInfoHeader
            text="Информация об уроке"
            className={styles.lesson__info}
          >
            <HelpCircle />
          </CardInfoHeader>
          <div className={styles.info}>
            <div className={styles.info__block}>
              <span>Дата</span>
              30.05.2023
            </div>
            <div className={styles.info__block}>
              <span>Время</span>
              30.05.2023
            </div>
            <div className={styles.info__block}>
              <span>Группа</span>
              30.05.2023
            </div>
            <div className={styles.info__block}>
              <span>Урок</span>
              30.05.2023
            </div>
            <div className={styles.info__block}>
              <span>Аудитория</span>
              30.05.2023
            </div>
          </div>
        </div>
        <div className={styles.info__wrapper}>
          <CardInfoHeader
            text="Группа ALA_M_6KOY_A5"
            className={styles.group__info}
          >
            <Users2 />
          </CardInfoHeader>
          <div className={styles.info}>
            <p>1. Абдулдаев Мағжан (9 лет) </p>
            <p>2. Дамир Қайратұлы</p>
            <p>3. Дуйсен Сара (11 лет +6мес)</p>
            <p>4. Жумагул Аяла (11 лет +4мес)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
