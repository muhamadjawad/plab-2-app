import colors from '@src/styles/colors';
import {getHeight} from '@src/styles/dimensions';
import {toDoubleDigit} from '@src/utils/funcs';
import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

type CountDownProps = {
  duration: number;
  totalTime?: number;
};

const CountDown = ({duration = 90, totalTime = 300}: CountDownProps) => {
  const fillPercentage = (duration / totalTime) * 100; // Calculate fill percentage

  return (
    <View style={[styles.main]}>
      <AnimatedCircularProgress
        size={220}
        width={5}
        backgroundWidth={18}
        backgroundColor={colors.lightGray}
        fill={fillPercentage}
        tintColor={colors.primary}
        tintTransparency={true}
        rotation={0}
        lineCap="round">
        {fill => {
          let absoluteFill = Math.floor(duration);
          const minutes = Math.floor((absoluteFill % 3600) / 60);
          const seconds = absoluteFill % 60;
          return (
            <Text style={[styles.time]}>{`${toDoubleDigit(
              minutes,
            )}:${toDoubleDigit(seconds)}`}</Text>
          );
        }}
      </AnimatedCircularProgress>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getHeight(2),
  },
  time: {
    color: colors.gray,
    fontSize: 38,
    fontWeight: 'bold',
  },
});
export default CountDown;
