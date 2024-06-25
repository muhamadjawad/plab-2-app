import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {getHeight} from '../styles/dimensions';

type LongButtonPropsType = {
  title: string;
};

const LongButton = ({title}: LongButtonPropsType) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: getHeight(1),
  },
  text: {
    color: colors.white,
  },
});
export default LongButton;
