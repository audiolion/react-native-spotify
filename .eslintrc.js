module.exports = {
  root: true,
  extends: 'react-app',
  rules: {
    'prettier/prettier': 0,
  },
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};
