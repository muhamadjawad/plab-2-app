import React, { Component, useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import QuestionReading from '@src/screens/QuestionReading';
import colors from '@src/styles/colors';
import CaseEncounter from '@src/screens/CaseEncounter';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '@src/navigation';
// import MainNavigator from './src/navigation';


const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    SplashScreen.hide();
    // }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
