import React from 'react';
import { DocumentNode } from 'graphql';
import { NavigationScreenProp } from 'react-navigation';
import { OperationVariables } from '@apollo/react-common';
import { useQuery as useApolloQuery } from '@apollo/react-hooks';
import { QueryComponentOptions } from '@apollo/react-components';
import { Loading } from './Loading';
import { NetworkStatus } from 'apollo-client';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  query: DocumentNode;
  navigation: NavigationScreenProp<any>;
  errorFallback?: React.ReactElement | null;
  onLoading?: React.ReactElement | null;
  retry?: () => void;
}

export function Query<TData = any, TVariables = OperationVariables>({
  query,
  children,
  navigation,
  onLoading,
  errorFallback,
  retry,
  ...options
}: Props & Omit<QueryComponentOptions<TData, TVariables>, 'query'>) {
  const result = useApolloQuery<TData, TVariables>(query, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  if (
    result.loading &&
    ![NetworkStatus.fetchMore, NetworkStatus.refetch].includes(
      result.networkStatus
    )
  ) {
    return onLoading || <Loading />;
  }

  if (result.error) {
    const { graphQLErrors } = result.error;
    const isUnauthenticated = graphQLErrors.find(
      error => error.message && error.message === 'Unauthorized'
    );
    if (isUnauthenticated) {
      AsyncStorage.multiRemove(['access-token', 'token-expires']).then(() =>
        navigation.navigate('Auth')
      );
      return null;
    }
    return errorFallback || <Loading error />;
  }

  return children(result);
}
