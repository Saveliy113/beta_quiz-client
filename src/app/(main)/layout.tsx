import Header from '@/shared/ui/Header/Header';
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
      <ContentSection>{children}</ContentSection>
    </>
  );
}
