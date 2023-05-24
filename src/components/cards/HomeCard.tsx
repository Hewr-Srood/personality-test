import { Caption } from '../Caption';
import { Circle } from '../Circle';
import { Row } from '../Row';
import { Title } from '../Title';

import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { BORDER_RADIUS, spacing } from '../../configs';

interface CardProps {
  title: string;
  captions: string[];
  backgroundColor?: string;
  instructionCard?: boolean;
}
export const HomeCard: FC<CardProps> = props => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: props.backgroundColor || '#D6F2ED',
        },
      ]}>
      <Title>{props.title}</Title>
      {props.instructionCard
        ? props.captions.map((caption, index) => (
            <Row key={index} justifyContent='flex-start' alignItems='flex-start' gap={10}>
              <Circle />
              <Caption>{caption}</Caption>
            </Row>
          ))
        : props.captions.map((caption, index) => (
            <Row key={index} justifyContent='flex-start' alignItems='flex-start' gap={10}>
              <Caption>{caption}</Caption>
            </Row>
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: spacing.lg,
    width: '100%',
    maxWidth: 500,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.lg,
    borderStyle: 'dashed',
    padding: spacing.lg,
  },
});
