import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

import { spacing } from 'configs';

interface Props {
  width?: number;
  height?: number;
  rotate?: string;
}
export const Connector: FC<Props> = ({ width, height, rotate }) => {
  return (
    <View
      style={[
        styles.connector,
        {
          height,
          transform: [{ rotate }],
        },
      ]}>
      <Svg
        renderToHardwareTextureAndroid
        shouldRasterizeIOS
        width={'90%'}
        height={height}
        fill='none'>
        <Circle cx='50%' cy={10} r={width} fill='#000' stroke='#fff' />
        <Circle cx='50%' cy={height - width} r={width} fill='#000' stroke='#fff' />
        <Rect
          x='50%'
          transform={`translate(-${width / 4})`}
          y={10}
          width={width / 2}
          height={height - 5 - width * 2}
          rx={2}
          fill='white'
          stroke='black'
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: spacing.lg,
    left: 0,
    position: 'absolute',
    top: -40,
  },
  connector: {
    transform: [{ rotate: '-5deg' }],
    width: 30,
  },
});
