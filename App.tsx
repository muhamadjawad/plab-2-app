import React, {Component, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
};

export default App;
