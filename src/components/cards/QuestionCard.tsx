import { AnimatedButton } from '../AnimatedButton';
import { Caption } from '../Caption';
import { Title } from '../Title';
import { withFadeAnimation } from 'HOC';

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { BORDER_RADIUS, COLORS, spacing } from 'src/configs';
import { IAnswer } from 'src/interfaces';
import { useAppSelector } from 'src/redux/store';

interface QuestionCardProps {
  handleAnswer: (ans: IAnswer) => void;
  question: {
    id: number;
    title: string;
    answers: {
      id: number;
      answer: string;
      personalityTrait: string;
    }[];
  };
}

const Card: React.FC<QuestionCardProps> = ({ question, handleAnswer }) => {
  const [activeAnswer, setActiveAnswer] = useState(0);
  const result = useAppSelector(state => state.result);
  const handlePress = (id: number) => {
    setActiveAnswer(id);
    const ans = {
      id,
      question_id: question.id,
      title: question.title,
      answer: question?.answers[activeAnswer]?.answer,
      personalityTrait: question?.answers[activeAnswer]?.personalityTrait,
    };
    handleAnswer(ans);
  };
  useEffect(() => {
    if (result[question.id]) {
      setActiveAnswer(result[question.id].id);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View
        shouldRasterizeIOS
        style={[
          styles.card,
          styles.overlay,
          {
            transform: [{ rotate: question.id % 2 === 0 ? '-2deg' : '2deg' }],
          },
        ]}
      />
      <View style={styles.card}>
        <Title>Question</Title>
        <Caption>{question.title}</Caption>
        {question.answers.map(answer => {
          return (
            <AnimatedButton
              key={answer.id}
              id={answer.id}
              onPress={handlePress}
              activeAnswer={activeAnswer}>
              <Text>{answer.answer}</Text>
            </AnimatedButton>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  card: {
    gap: spacing.lg,
    width: '100%',
    borderWidth: 2,
    borderRadius: BORDER_RADIUS.sm,
    padding: spacing.lg,
    backgroundColor: COLORS.white,
    borderColor: COLORS.darkgrey,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
});

export const QuestionCard = withFadeAnimation(Card);
