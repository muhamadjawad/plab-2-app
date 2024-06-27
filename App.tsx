import React, {Component, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import QuestionReading from '@src/screens/QuestionReading';
import colors from '@src/styles/colors';
import CaseEncounter from '@src/screens/CaseEncounter';

const App = () => {
  useEffect(() => {
    // setTimeout(() => {
      SplashScreen.hide();
    // }, 1000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CaseEncounter />
    </View>
  );
};

export default App;
