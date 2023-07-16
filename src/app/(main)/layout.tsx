import Header from '@/shared/ui/Header/Header';
import styles from './mainLayout.module.scss';
import Sidebar from '@/shared/ui/Sidebar/Sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.content__wrapper}>
        <Sidebar />
        <div className={styles.content}></div>
      </div>
    </>
  );
}
