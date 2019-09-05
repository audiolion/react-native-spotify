import React from 'react';
import { useTimeout } from '@ryanar/hooks';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Alert } from './Alert';
import { Colors } from '../helpers/constants';

type Props = {
  delay?: number;
  error?: boolean;
  timedOut?: boolean;
  style?: StyleProp<ViewStyle>;
  animating?: boolean;
  color?: string;
  size?: number | 'small' | 'large';
};

export const Loading: React.FC<Props> = ({
  delay = 1000,
  error = undefined,
  timedOut = false,
  style,
  animating = true,
  color,
  size,
}) => {
  const shouldDisplay = useTimeout(delay);

  if (error) {
    return (
      <Alert
        message="Data could not be retrieved."
        type="red"
        style={styles.row}
      />
    );
  }

  if (timedOut) {
    return (
      <Alert
        message="Loading is taking a long time."
        type="yellow"
        style={styles.row}
      />
    );
  }

  if (!shouldDisplay) {
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        animating={animating}
        testID={
          process.env.NODE_ENV === 'test'
            ? 'components-loading-indicator'
            : undefined
        }
        color={color || Colors.spotifyGreen}
        size={size}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  retryButton: {
    backgroundColor: 'transparent',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 2,
    paddingLeft: 8,
    borderWidth: 0,
  },
});
