import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  name: string;
};

export const StubScreen: React.FC<Props> = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
