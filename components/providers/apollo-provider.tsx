'use client';

import { ApolloProvider } from '@apollo/client';
import Guard from '../guard/guard';
import MainNavigation from '../layout/main-navigation';
import client from './apollo-client';

interface ProviderProps {
  children: React.ReactNode;
}

export const ApolloProviderWrapper = ({ children }: ProviderProps) => {
  return (
    <ApolloProvider client={client}>
      <Guard excludedRoutes={['/auth/login', '/auth/signup']}>
        <MainNavigation>{children}</MainNavigation>
      </Guard>
    </ApolloProvider>
  );
};
