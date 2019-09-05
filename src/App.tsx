import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { RootNav } from './navigation';
import { ApolloProvider } from '@apollo/react-hooks';
import { Colors, DEEP_LINKING_SCHEME } from './helpers/constants';
import { spotifyClient } from './config/apollo';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={spotifyClient}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <RootNav uriPrefix={DEEP_LINKING_SCHEME} />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.spotifyWhite,
    flex: 1,
  },
});
