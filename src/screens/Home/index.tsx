import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppHeader from '../../containers/AppHeader';

const Home = () => {
  return (
    <View>
      <AppHeader title="Timer Settings" />
      <View>
        <Text>{'Question time'}</Text>
      </View>
    </View>
  );
};

export default Home;
