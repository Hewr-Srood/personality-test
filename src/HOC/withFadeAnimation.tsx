import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export const withFadeAnimation = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
  return (props: P) => {
    return (
      <View
        style={{
          width: '100%',

          overflow: 'visible',
        }}>
        <Animated.View
          style={{
            width: '100%',

            overflow: 'visible',
          }}
          entering={FadeIn?.duration(800)?.delay(300)}
          exiting={FadeOut?.duration(300)}>
          <WrappedComponent {...props} />
        </Animated.View>
      </View>
    );
  };
};
