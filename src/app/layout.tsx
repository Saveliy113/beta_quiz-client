import './globals.scss';
import { ReactQueryProvider } from './layer/providers';
import ThemeRegistry from './layer/providers/ui/ThemeRegistry';

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
