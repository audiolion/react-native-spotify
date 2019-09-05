import Reactotron from 'reactotron-react-native';

Reactotron.configure()
  .useReactNative()
  .connect();

// @ts-ignore
console.tron = Reactotron;
