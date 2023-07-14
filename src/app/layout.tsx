import AuthProvider from '@/appLayer/providers/authProvider/AuthProvider';
import './globals.scss';
import { ReactQueryProvider } from '@/appLayer/providers/index';
import { ThemeRegistry } from '@/appLayer/providers/index';
import { ReduxProvider } from '@/appLayer/providers/redux/reduxProvider';
import { Toaster } from 'react-hot-toast';

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
            <ReduxProvider>
              <AuthProvider>{children}</AuthProvider>
            </ReduxProvider>
          </ThemeRegistry>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
