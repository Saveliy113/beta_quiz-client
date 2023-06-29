'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientOptions } from './queryClientOptions';

export default function ReactQueryProvider({ children }) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientOptions)
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
