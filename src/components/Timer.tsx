import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TimerPickerModal, TimerPickerProps } from 'react-native-timer-picker';
import colors from '../styles/colors';
import { getHeight, getWidth } from '@src/styles/dimensions';
import Icon from 'react-native-vector-icons/Entypo';
import { TimerType } from '@src/types';
import { toDoubleDigit } from '@src/utils/funcs';


const Timer = (): React.JSX.Element => {
  const [showPicker, setShowPicker] = useState(false);
  const [alarmString, setAlarmString] = useState<TimerType>({ hours: 0, minutes: 1, seconds: 30 });

  return (
    <>
      <View style={[styles.timer_container]} >
        <TouchableOpacity onPress={() => setShowPicker(true)} >
          <Text style={[styles.time]} >{`${toDoubleDigit(alarmString.minutes)}:${toDoubleDigit(alarmString.seconds)}`}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ marginLeft: getWidth(2) }} >
          <Icon name="edit" size={getWidth(4)} color={colors.gray} />
        </TouchableOpacity> */}

      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: getHeight(1.5),
        }}>
        <TimerPickerModal
          visible={showPicker}
          setIsVisible={setShowPicker}
          onConfirm={(pickedDuration: TimerType) => {
            setAlarmString(pickedDuration);
            setShowPicker(false);
          }}
          modalTitle="Pick Duration"
          onCancel={() => setShowPicker(false)}
          minuteLimit={{ max: 2, min: 0 }}
          styles={{
            theme: 'light',
            backgroundColor: colors.white,
            button: {
              borderColor: 'yellow',
              borderWidth: 0,
              borderRadius: 2,
              fontSize: getWidth(3),
            },
            confirmButton: {
              backgroundColor: colors.primary,
              color: colors.white,
            },
            cancelButton: {
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.primary,
              color: colors.primary,
            },
            modalTitle: {
              fontSize: getWidth(4.2),
            },
            pickerContainer: {},

            pickerItem: {
              fontSize: getWidth(6),
            },
            pickerLabel: {
              color: colors.gray,
            },
          }}
          modalProps={{
            overlayOpacity: 0.1,
          }}
          hideHours
          closeOnOverlayPress
        />
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
