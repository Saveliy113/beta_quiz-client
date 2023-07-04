import './globals.scss';
import { ReactQueryProvider } from '@/appLayer/providers/index';
import { ThemeRegistry } from '@/appLayer/providers/index';

export const metadata = {
  title: 'Beta-Quiz',
  description: 'Beta Quiz app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
