import Header from '@/shared/ui/Header/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
    </div>
  );
}
