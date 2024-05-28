import React, {Component, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import colors from './src/styles/colors';
import Home from './src/screens/Home';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Home />
    </View>
  );
};

export default App;
