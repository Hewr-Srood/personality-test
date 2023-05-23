import { FC, ReactNode } from 'react';
import { FlexStyle, View, ViewProps, ViewStyle } from 'react-native';

interface RowProps extends ViewProps {
  gap?: FlexStyle['gap'];
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  children: ReactNode;
}

export const Row: FC<RowProps> = props => {
  return (
    <View
      {...props}
      style={[
        {
          width: '100%',
          flexDirection: 'row',
          justifyContent: props.justifyContent,
          alignItems: props.alignItems || 'center',
          gap: props.gap,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};
