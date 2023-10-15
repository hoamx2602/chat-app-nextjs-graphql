import { API_URL } from '@/constants';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import authenticatedVar from './authenticated';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'same-origin',
});

const logoutLink = onError(({ graphQLErrors }) => {
  if (
    graphQLErrors?.length &&
    graphQLErrors[0].extensions?.code === 'UNAUTHENTICATED'
  ) {
    authenticatedVar(false);
  }
});

const client = new ApolloClient({
  credentials: 'include',
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});

export default client;
