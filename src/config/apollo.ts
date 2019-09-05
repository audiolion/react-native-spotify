import AsyncStorage from '@react-native-community/async-storage';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

import { apiUrl } from '../helpers/constants';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors && Array.isArray(graphQLErrors)) {
    console.log(
      graphQLErrors
        .map(
          ({ message, locations, path }) =>
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
        .join('\n')
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpSpotifyLink = new HttpLink({
  uri: apiUrl,
});

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  return AsyncStorage.getItem('access-token').then(token => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }));
});

export const spotifyClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpSpotifyLink]),
  cache,
});
