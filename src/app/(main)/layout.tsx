import Header from '@/shared/ui/Header/Header';
import styles from './mainLayout.module.scss';
import Sidebar from '@/shared/ui/Sidebar/Sidebar';
import ContentSection from './ContentSection';

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
      <ContentSection />
    </>
  );
}
