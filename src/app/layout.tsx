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
  console.log(process.env.SERVER_URL);
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ThemeRegistry>
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeRegistry>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
