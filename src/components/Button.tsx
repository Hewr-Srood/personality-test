import { FC } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Text } from 'react-native';
import { BORDER_RADIUS, COLORS } from '../config';

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  text: string;
}

export const Button: FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
      activeOpacity={0.7}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#705771',
    borderRadius: BORDER_RADIUS.l,
  },
  buttonText: {
    color: COLORS.white,
  },
});
