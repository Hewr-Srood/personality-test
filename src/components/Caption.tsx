import { FC } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

import { COLORS, spacing } from 'configs';

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
    lineHeight: spacing.xl,
    color: COLORS.caption,
  },
});
