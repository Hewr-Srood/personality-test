import { FC } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Text, StyleProp, TouchableOpacityProps } from 'react-native';

import { BORDER_RADIUS, COLORS } from 'configs';

interface ButtonProps extends TouchableOpacityProps{
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  title: string;
}

export const Button: FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
      activeOpacity={0.7}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#705771',
    borderRadius: BORDER_RADIUS.lg,
  },
  buttonText: {
    color: COLORS.white,
  },
});
