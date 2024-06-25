import React, {Component, useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {TimerPickerModal} from 'react-native-timer-picker';
import colors from '../styles/colors';
import {getWidth} from '../styles/dimensions';

const Timer = (): React.JSX.Element => {
  const [showPicker, setShowPicker] = useState(false);
  const [alarmString, setAlarmString] = useState<string | null>(null);

  return (
    <View
      style={{
        backgroundColor: '#514242',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text style={{fontSize: 18, color: "#F1F1F1"}}>
                    {alarmStringExample !== null
                        ? "Alarm set for"
                        : "No alarm set"}
                </Text> */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => setShowPicker(true)}>
        <View style={{alignItems: 'center'}}>
          {alarmString !== null ? (
            <Text style={{color: 'red', fontSize: 48}}>{alarmString}</Text>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}>
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 16,
                  overflow: 'hidden',
                  borderColor: '#C2C2C2',
                  color: '#C2C2C2',
                }}>
                Set Alarm 🔔
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* sas
      
      */}
      <TimerPickerModal
        visible={showPicker}
        setIsVisible={setShowPicker}
        onConfirm={(pickedDuration: any) => {
          setAlarmString(pickedDuration);
          setShowPicker(false);
        }}
        modalTitle="Pick Duration"
        onCancel={() => setShowPicker(false)}
        minuteLimit={{max: 2, min: 0}}
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
  );
};

export default Timer;
