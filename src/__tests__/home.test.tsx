import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useRouter } from 'expo-router';
import Home from '../../app/home';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('Home', () => {
  it('renders the title and caption', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Understand your personality');
    const caption = getByText('Self-assestment');
    expect(title).toBeDefined();
    expect(caption).toBeDefined();
  });

  it('renders the card with the correct title and caption', () => {
    const { getByText } = render(<Home />);
    const cardTitle = getByText('About Assestment');
    const cardCaption = getByText(
      `Behold! Our specialized framework: the ultimate personality profiler! It's like a psychic octopus, but without the ink stains.`,
    );
    expect(cardTitle).toBeDefined();
    expect(cardCaption).toBeDefined();
  });

  it('renders the correct number of questions and time', () => {
    const { getByText } = render(<Home />);
    const numberOfQuestions = getByText('5 Questions');
    const time = getByText('5 Minutes');
    expect(numberOfQuestions).toBeDefined();
    expect(time).toBeDefined();
  });

  it('renders the instruction card', () => {
    const { getByText } = render(<Home />);
    const cardTitle = getByText('Instruction');
    const firstInstruction = getByText(
      'There are no right or wrong answers. follow your heart and choose what resonates with you',
    );
    const secondInstruction = getByText('be true to yourself and answer authentically');
    expect(cardTitle).toBeDefined();
    expect(firstInstruction).toBeDefined();
    expect(secondInstruction).toBeDefined();
  });

  it('navigates to the questions screen when the "Take the test" button is pressed', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    const { getByText } = render(<Home />);
    fireEvent.press(getByText('Take the test'));
    expect(pushMock).toHaveBeenCalledWith('/questions');
  });
});
