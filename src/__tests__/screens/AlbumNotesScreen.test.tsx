import React from 'react';
import faker from 'faker';
import { View } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import { AlbumNotesScreen } from '../../screens/AlbumNotesScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { act } from 'react-test-renderer';

const AlbumList = () => <View />;
const routeConfig = { AlbumList, AlbumNotesScreen };

test('redirects to AlbumList', async () => {
  const StackNavigator = createStackNavigator(routeConfig, {
    initialRouteName: 'AlbumNotesScreen',
  });

  const App = createAppContainer(StackNavigator);

  render(<App />);
});

test('posts form data', async () => {
  // @ts-ignore
  fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

  const params = {
    id: faker.random.uuid(),
    uri: faker.internet.url(),
    name: faker.random.words(),
  };

  const StackNavigator = createStackNavigator(routeConfig, {
    initialRouteName: 'AlbumNotesScreen',
    initialRouteParams: params,
  });

  const App = createAppContainer(StackNavigator);

  const queries = render(<App />);

  act(() => {
    fireEvent.changeText(queries.getByPlaceholder(/Album/i), 'foo bar');
  });

  act(() => {
    fireEvent.press(queries.getByText(/Submit/i));
  });

  await new Promise(res => setTimeout(() => res(), 50));

  expect(queries.getByPlaceholder(/Album/i).props.value).toEqual('');
});
