module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
  },
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};
