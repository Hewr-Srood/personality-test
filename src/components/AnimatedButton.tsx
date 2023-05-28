import { Row } from './Row';
import animation from 'assets/done.json';

import { FC, useEffect, useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withDelay,
  Easing,
} from 'react-native-reanimated';

import LottieView from 'lottie-react-native';

import { BORDER_RADIUS, COLORS, spacing } from 'configs';

interface AnimatedButtonProps {
  onPress?: (id: number) => void;
  children: React.ReactNode;
  id: number;
  activeAnswer: number;
}
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const AnimatedButton: FC<AnimatedButtonProps> = ({
  onPress,
  children,
  id,
  activeAnswer,
}) => {
  const backgroundColor = useSharedValue('#ffffff');
  const scale = useSharedValue(1);
  const animationRef = useRef(null);
  useEffect(() => {
    if (id !== activeAnswer) {
      backgroundColor.value = withTiming('#ffffff', { duration: 100 });
      scale.value = withTiming(1, { duration: 100 });
      animationRef.current?.reset();
    }
    if (id === activeAnswer) {
      animationRef.current.play();
      backgroundColor.value = withTiming('#ECF7FF', { duration: 100 });
      scale.value = withTiming(1, { duration: 100 });
    }
  }, [activeAnswer]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
      opacity: scale.value,
    };
  }, []);

  const handlePressIn = () => {
    backgroundColor.value = withSequence(
      withTiming('#ECF7FF', { duration: 100 }),
      withDelay(100, withTiming('#ffffff', { duration: 100 })),
      withDelay(100, withTiming('#ECF7FF', { duration: 100 })),
      withDelay(100, withTiming('#ECF7FF', { duration: 100 })),
    );
    scale.value = withSequence(
      withTiming(0.3, { duration: 150, easing: Easing.inOut(Easing.ease) }),
      withTiming(0.7, { duration: 150, easing: Easing.inOut(Easing.ease) }),
    );
  };
  const handlePress = () => {
    onPress(id);
  };

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      style={[styles.button, animatedStyle]}>
      <Row>
        <View style={{ flex: 1 }}>{children}</View>
        <View style={{ flex: 0.1 }}>
          <LottieView
            ref={animationRef}
            key={id}
            hardwareAccelerationAndroid
            renderMode='HARDWARE'
            cacheStrategy='strong'
            style={{
              opacity: id === activeAnswer ? 1 : 0,
              width: '170%',
            }}
            loop={false}
            source={animation}
          />
        </View>
      </Row>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    padding: spacing.sm,
    borderRadius: BORDER_RADIUS.md,
    borderColor: COLORS.darkgrey,
  },
});

export default AnimatedButton;
