import { StyleSheet } from 'react-native';

import { COLORS, spacing } from 'configs';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  connectorContainer: {
    width: '100%',
    paddingHorizontal: '10%',
    left: 0,
    position: 'absolute',
    top: -40,
  },
  buttonContainer: {
    width: '50%',
    height: 55,
  },
});

export default homeStyles;
