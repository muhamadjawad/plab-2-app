import colors from '@src/styles/colors';
import { getHeight, getWidth } from '@src/styles/dimensions';
import { TimerType } from '@src/types';
import React, { Component } from 'react'
import { View } from 'react-native';
import { TimerPickerModal, TimerPickerProps } from 'react-native-timer-picker';

type SelectTimerModalProps = {
    showPicker: boolean;
    onChangeTimer: any;
    setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectTimerModal = ({ showPicker, onChangeTimer, setShowPicker }: SelectTimerModalProps) => {
    return (<View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: getHeight(1.5),
        }}>
        <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}
            onConfirm={(pickedDuration: TimerType) => {
                onChangeTimer(pickedDuration);
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
    </View>);
}

export default SelectTimerModal;