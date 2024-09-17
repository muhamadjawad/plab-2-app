import {Dimensions} from 'react-native';

const getWidth = (val: number) => {
  return (Dimensions.get('screen').width / 100) * val;
};

const getHeight = (val: number) => {
  return (Dimensions.get('screen').height / 100) * val;
};

export {getWidth, getHeight};
