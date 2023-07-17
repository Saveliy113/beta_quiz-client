import AuthProvider from '@/appLayer/providers/authProvider/AuthProvider';
import { ReactQueryProvider } from '@/appLayer/providers/index';
import { ThemeRegistry } from '@/appLayer/providers/index';
import { ReduxProvider } from '@/appLayer/providers/redux/reduxProvider';
import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';
import './globals.scss';

export const metadata = {
  title: 'Beta-Quiz',
  description: 'Beta Quiz app',
  // icons: {
  //   icon: './favicon.ico',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#1e88e5"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #1e88e5,0 0 5px #1e88e5"
        />
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
