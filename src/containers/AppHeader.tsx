import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import {getHeight, getWidth} from '../styles/dimensions';

type AppHeaderType = {
  title?: string;
};

const AppHeader = ({title}: AppHeaderType) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getHeight(2),
  },
  title: {
    fontSize: getWidth(5),
    color: colors.white,
  },
});

export default AppHeader;
