module.exports = {
  // plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react', 'react-native', 'expo', 'src', 'configs', 'components', '.styles'],
  importOrderSeparation: true,
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'auto',
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  jsxSingleQuote: true,
};
