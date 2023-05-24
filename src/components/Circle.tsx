import { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { BORDER_RADIUS, COLORS } from 'configs';

export const Circle: FC = () => {
  return <View style={styles.circle} />;
};

const styles = StyleSheet.create({
  circle: {
    top: '3%',
    borderRadius: BORDER_RADIUS.xl,
    width: 7,
    height: 7,
    backgroundColor: COLORS.primary,
  },
});
