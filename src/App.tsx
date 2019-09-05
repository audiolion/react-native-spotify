import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { RootNav } from './navigation';
import { Colors, DEEP_LINKING_SCHEME } from './helpers/constants';

export const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <RootNav uriPrefix={DEEP_LINKING_SCHEME} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.spotifyWhite,
    flex: 1,
  },
});
