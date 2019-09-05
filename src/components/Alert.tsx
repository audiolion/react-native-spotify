import React from 'react';
import { TextStyle, ViewProps, Text, StyleSheet, View } from 'react-native';
import { Colors } from '../helpers/constants';

export interface AlertProps extends ViewProps {
  message: string;
  textStyle?: TextStyle;
  type?: 'red' | 'yellow' | 'blue';
}

export const Alert: React.FC<AlertProps> = props => {
  const type = props.type || 'blue';
  const alertTextStyle =
    props.type === 'yellow' ? styles.alertTextDark : styles.alertTextLight;
  return (
    <View
      // @ts-ignore
      style={[styles.alertContainer, styles[`${type}Container`], props.style]}
    >
      <Text style={[alertTextStyle, props.textStyle]}>{props.message}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  alertTextLight: {
    color: Colors.spotifyWhite,
  },
  alertTextDark: {
    color: Colors.spotifyBlack,
  },
  redContainer: {
    backgroundColor: Colors.red,
  },
  yellowContainer: {
    backgroundColor: Colors.yellow,
  },
  blueContainer: {
    backgroundColor: Colors.blue,
  },
});
