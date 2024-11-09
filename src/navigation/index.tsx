import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CaseEncounter from '@src/screens/CaseEncounter';
import Home from '@src/screens/Home';
import QuestionReading from '@src/screens/QuestionReading';
import { ENCOUNTER_ROUTE, HOME_ROUTE, QUESTION_READING_ROUTE } from '@src/utils/routeConstants';
import { RootStackParamList } from '@src/types';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'home'}
            screenOptions={{
                headerShown: false
                // header: () => <HomeHeader />,
            }}
        >
            <Stack.Screen name={'home'} component={Home} />
            <Stack.Screen name={'question'} component={QuestionReading} />
            <Stack.Screen name={'encounter'} component={CaseEncounter} />
        </Stack.Navigator>
    );
}

export default MainNavigator;