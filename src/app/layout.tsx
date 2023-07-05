import './globals.scss';
import { ReactQueryProvider } from '@/appLayer/providers/index';
import { ThemeRegistry } from '@/appLayer/providers/index';
import { ReduxProvider } from '@/appLayer/providers/redux/reduxProvider';

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
        <ReactQueryProvider>
          <ThemeRegistry>
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
