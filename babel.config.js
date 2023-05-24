module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',

        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            src: './src',
            components: './src/components',
            configs: './src/configs',
          },
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
    ],
  };
};
