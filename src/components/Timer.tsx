import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TimerPickerModal, TimerPickerProps } from 'react-native-timer-picker';
import colors from '../styles/colors';
import { getHeight, getWidth } from '@src/styles/dimensions';
import Icon from 'react-native-vector-icons/Entypo';
import { TimerType } from '@src/types';
import { toDoubleDigit } from '@src/utils/funcs';
import SelectTimerModal from '@src/components/SelectTimerModal';

type TimerProps = {
  time: TimerType;
  onChangeTimer: any
}

const Timer: React.FC<TimerProps> = ({ time, onChangeTimer }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <View style={[styles.timer_container]} >
        <TouchableOpacity onPress={() => setShowPicker(true)} >
          <Text style={[styles.time]} >{`${toDoubleDigit(time.minutes)}:${toDoubleDigit(time.seconds)}`}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ marginLeft: getWidth(2) }} >
          <Icon name="edit" size={getWidth(4)} color={colors.gray} />
        </TouchableOpacity> */}
        <SelectTimerModal showPicker={showPicker} onChangeTimer={onChangeTimer} setShowPicker={setShowPicker} />

      </View>

    </>
  );

};
const styles = StyleSheet.create({
  timer_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: colors.primary,
    fontSize: getWidth(10),
    fontWeight: 'bold'
  },
})


export default Timer;
