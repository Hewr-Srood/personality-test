import { FC, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

import { BORDER_RADIUS, spacing } from 'src/configs';

interface SnackbarProps {
  message: string;
  onDismiss: () => void;
  variant?: 'success' | 'error' | 'warning';
}
export const Snackbar: FC<SnackbarProps> = ({ message, onDismiss, variant = 'success' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.snackbar,
        {
          backgroundColor:
            variant === 'success'
              ? '#4CAF50'
              : variant === 'error'
              ? '#FF5B5B'
              : variant === 'warning'
              ? '#FF9800'
              : '#000000',
        },
      ]}
      entering={FadeInDown}
      exiting={FadeOutDown}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
        <Text style={styles.dismissButtonText}>x</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: spacing.sm,
    alignSelf: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    borderRadius: BORDER_RADIUS.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  message: {
    color: '#ffffff',
    fontSize: 16,
    marginRight: spacing.md,
  },
  dismissButton: {
    alignItems: 'center',
    width: 22,

    borderRadius: 155,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  dismissButtonText: {
    color: '#e0e0e0',
    fontSize: 14,
    top: -1.5,
  },
});
