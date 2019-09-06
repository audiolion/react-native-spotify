import React from 'react';
import { render } from 'react-native-testing-library';
import { SpotifyCallbackScreen } from '../../screens/SpotifyCallbackScreen';

test('Sets token and expires, navigates to App', async () => {
  const navigation = {
    navigate: jest.fn(),
    getParam: jest.fn().mockImplementation(() => '3600'),
  };

  render(<SpotifyCallbackScreen navigation={navigation as any} />);

  await new Promise(res => setTimeout(() => res(), 50));

  expect(navigation.navigate).toBeCalledWith('App');
});
