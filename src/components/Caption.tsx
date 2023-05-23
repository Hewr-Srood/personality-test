import { FC } from 'react';
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import { COLORS } from '../config';

export const Caption: FC<TextProps> = props => {
  return (
    <Text {...props} style={[styles.caption, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  caption: {
    fontSize: 14,
    color: COLORS.caption,
  },
});
