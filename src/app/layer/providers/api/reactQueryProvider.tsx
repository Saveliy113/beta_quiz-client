'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientOptions } from './queryClientOptions';

type QueryProviderProps = {
  children: React.ReactNode;
};

export default function ReactQueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientOptions)
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
