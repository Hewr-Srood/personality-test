import { withFadeAnimation } from 'HOC';

import { useState } from 'react';
import { StyleSheet, View, Easing, Dimensions, ScrollView } from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';

import { useRouter } from 'expo-router';

import { COLORS, height, spacing, width } from 'src/configs';
import mockData from 'src/data/mockData.json';
import { IAnswer, IQuestion, IResult } from 'src/interfaces';
import { clearResult, setResult } from 'src/redux/features/resultSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

import { QuestionCard, Button, Snackbar, Row } from 'components';

const data: IQuestion[] = mockData;
const animationConfig = {
  duration: 800,
  delay: 0,
  useNativeDriver: true,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};
const Questions = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(0.2);
  const [stepper, setStepper] = useState(0);
  const [snackbar, setSnackbar] = useState(false);
  const handleDismiss = () => {
    setSnackbar(false);
  };

  const result = useAppSelector(state => state.result);
  const handleAnswer: (ans: IAnswer) => void = answer => {
    dispatch(setResult(answer));
  };

  const router = useRouter();
  const handlePress = () => {
    if (!result[data[stepper].id]) {
      setSnackbar(true);
      return;
    }
    if (stepper === 4) {
      router.push('/result');
      return;
    }
    setValue(prev => prev + 0.2);
    setStepper(prev => prev + 1);
  };
  const handleBackPress = () => {
    if (stepper === 0) {
      dispatch(clearResult());
      router.back();
    }
    setValue(prev => prev - 0.2);
    setStepper(prev => prev - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          animateTransitions
          // @ts-ignore
          animationConfig={animationConfig}
          minimumTrackTintColor='#FF9F6F'
          renderThumbComponent={() => null}
          trackStyle={styles.track}
          disabled
          value={value}
        />
      </View>
      <ScrollView contentContainerStyle={styles.questionsContainer}>
        {data.map((question, index) => {
          return stepper === index ? (
            <QuestionCard key={question.id} question={question} handleAnswer={handleAnswer} />
          ) : null;
        })}
      </ScrollView>

      <Row style={styles.buttonContainer} justifyContent='space-between'>
        <Button
          style={[styles.button, styles.backButton]}
          disabled={stepper === 0}
          onPress={handleBackPress}
          title={'Back'}
        />
        <Button
          style={styles.button}
          onPress={handlePress}
          title={stepper === 4 ? 'Finish' : 'Next'}
        />
      </Row>
      {snackbar && (
        <Snackbar variant='error' message='Please select an answer 🥹' onDismiss={handleDismiss} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    overflow: 'visible',
    width,
    paddingBottom: height * 0.05,
    height,
  },
  sliderContainer: {
    width: '100%',
    paddingHorizontal: spacing.sm,
  },
  track: {
    backgroundColor: '#EFEFEF',
    height: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#000',
  },
  questionsContainer: { paddingTop: 10, paddingHorizontal: spacing.md },
  buttonContainer: {
    paddingHorizontal: spacing.md,
    height: 50,
    gap: spacing.md,
  },
  button: {
    height: 45,
  },
  backButton: {
    backgroundColor: COLORS.darkgrey,
  },
});

export default withFadeAnimation(Questions);
