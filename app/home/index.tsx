import styles from './style';

import { SafeAreaView, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Row, Caption, Title, HomeCard as Card, Button, Connector } from 'components';

const connectorWidth = 5;
const connectorHeigit = 75;

const Home = () => {
  const router = useRouter();
  const handleTakeTest = () => {
    router.push('/questions');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Understand your personality</Title>
      <Caption>Self-assestment</Caption>
      <Row justifyContent='space-between' style={{ paddingHorizontal: 50 }}>
        <Text>5 Questions</Text>
        <Text>5 Minutes</Text>
      </Row>
      <Card
        title='About Assestment'
        captions={[
          `Behold! Our specialized framework: the ultimate personality profiler! It's like a psychic octopus, but without the ink stains.`,
        ]}
      />
      <View style={{ position: 'relative', width: '100%', zIndex: 2 }}>
        <Row justifyContent='space-between' style={styles.connectorContainer}>
          <Connector width={connectorWidth} height={connectorHeigit} rotate='-5deg' />
          <Connector width={connectorWidth} height={connectorHeigit} rotate='5deg' />
        </Row>
      </View>
      <Card
        instructionCard
        backgroundColor='#F8F4E6'
        title='Instruction'
        captions={[
          `There are no right or wrong answers. follow your heart and choose what resonates with you`,
          `be true to yourself and answer authentically`,
        ]}
      />
      <View style={styles.buttonContainer}>
        <Button title='Take the test' onPress={handleTakeTest} />
      </View>
    </SafeAreaView>
  );
};
export default Home;
