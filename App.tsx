import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '@src/navigation';
import colors from '@src/styles/colors';
import { TimerProvider } from '@src/context/TimerContext'; // Adjust the import path as needed

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TimerProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </TimerProvider>
    </View>
  );
};

export default App;
