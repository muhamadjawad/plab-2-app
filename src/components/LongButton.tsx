import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {getHeight} from '../styles/dimensions';

type LongButtonPropsType = {
  title: string;
  onPress?:()=>void
};

const LongButton = ({title,onPress}: LongButtonPropsType) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
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
    paddingVertical: getHeight(1.5),
  },
  text: {
    color: colors.white,
    fontSize:16
  },
});
export default LongButton;
