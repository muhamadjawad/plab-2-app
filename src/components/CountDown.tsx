import colors from '@src/styles/colors';
import {getHeight} from '@src/styles/dimensions';
import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

type CountDownProps = {
  duration: number;
};

const CountDown = ({duration = 90}: CountDownProps) => {
  return (
    <View style={[styles.main]}>
      <AnimatedCircularProgress
        size={220}
        width={5}
        backgroundWidth={18}
        backgroundColor={colors.lightGray}
        fill={duration}
        tintColor={colors.primary}
        tintTransparency={true}
        rotation={0}
        lineCap="round"
        onAnimationComplete={() => console.log('onAnimationComplete')}>
        {fill => {
          console.log('fill', fill);
          let absoluteFill = Math.floor(fill);
          const minutes = Math.floor((absoluteFill % 3600) / 60);
          const seconds = absoluteFill % 60;
          return <Text style={[styles.time]}>{`${minutes}:${seconds}`}</Text>;
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
