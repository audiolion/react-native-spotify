import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { RootNav } from './navigation';

export const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <RootNav />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
