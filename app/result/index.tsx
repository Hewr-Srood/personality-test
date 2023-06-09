import { useNavigation } from '@react-navigation/native';
import { VictoryPie } from 'victory-native';

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';

import { Button, Row } from 'src/components';
import { useAppSelector } from 'src/redux/store';

import { COLORS, spacing, width } from 'configs';

const getCompliment = data => {
  if (data[0]?.y === 100) {
    return 'Congratulations! You are a full extrovert.';
  }
  if (data[1]?.y === 100) {
    return 'Congratulations! You are a full introvert.';
  }

  if (data[0]?.y > data[1]?.y) {
    return 'You seem to have more introverted traits.';
  }

  return 'You seem to have more extroverted traits.';
};

const Result = () => {
  const result = useAppSelector(state => state.result);
  const [personality, setPersonality] = useState({
    text: '',
    data: [
      { x: 'introvert', y: 50 },
      { x: 'extrovert', y: 50 },
    ],
  });
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    let introvert = { x: 'introvert', y: 0 };
    let extrovert = { x: 'extrovert', y: 0 };
    const values = Object.values(result);

    setTimeout(() => {
      values.forEach(item => {
        if (item.personalityTrait === 'Introvert') {
          introvert.y += 20;
        } else {
          extrovert.y += 20;
        }
      });

      setPersonality({
        text: getCompliment({ data: [introvert, extrovert] }),
        data: [introvert, extrovert],
      });
    }, 1000);
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSeeAnswers = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderAnswerItem = ({ item }) => (
    <View style={styles.answerItem}>
      <Text style={styles.answerTitle}>{item.title}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personality Result</Text>
      <View style={styles.chartContainer}>
        <VictoryPie
          width={width * 0.7}
          height={width * 0.7}
          padding={0}
          cornerRadius={({ datum }) => datum.y * 0.25}
          categories={{ x: ['introvert', 'extrovert'] }}
          colorScale={['tomato', 'orange']}
          style={{
            labels: {
              fill: '#fff',
              fontSize: 14,
              textTransform: 'capitalize',
            },
          }}
          labels={() => null}
          labelRadius={80}
          animate={{ duration: 2000 }}
          data={personality.data}
        />
        {personality?.data[0].y && (
          <Text style={styles.label}>Introvert: {personality?.data[0].y}%</Text>
        )}
        {personality?.data[1].y && (
          <Text style={styles.label}>Extrovert: {personality?.data[1].y}%</Text>
        )}
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Result Details</Text>
        <Text style={styles.compliment}>{getCompliment(personality.data)}</Text>
      </View>

      <Row style={styles.buttonContainer} alignItems='center'>
        <Button style={styles.backButton} title='Go Back' onPress={handleGoBack} />

        <Button title='See your answers' onPress={handleSeeAnswers} />
      </Row>

      <Modal visible={showModal} animationType='fade' transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Object.values(result)}
              keyExtractor={item => item.answer}
              renderItem={renderAnswerItem}
              contentContainerStyle={styles.answerList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chartContainer: {
    backgroundColor: COLORS.darkgrey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.white,
  },
  compliment: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.white,
  },
  detailsContainer: {
    backgroundColor: COLORS.darkgrey,
    padding: spacing.md,
    borderRadius: 10,
  },
  buttonContainer: {
    height: 60,
    gap: 10,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  backButton: {
    backgroundColor: COLORS.darkgrey,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    width: '90%',
    maxHeight: '80%',
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: spacing.sm,
  },
  closeButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerList: {
    padding: spacing.sm,
    flexGrow: 1,
  },
  answerItem: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkgrey,
    paddingVertical: spacing.sm,
  },
  answerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: spacing.xs,
  },
  answer: {
    fontSize: 14,
    color: COLORS.darkgrey,
  },
});

export default Result;
