import { FC } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

import { COLORS } from 'configs';

export const Title: FC<TextProps> = props => {
  return (
    <Text {...props} style={[styles.title, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.title,
  },
});
