import AppHeader from '@src/components/AppHeader';
import React, { Component, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LongButton from '@src/components/LongButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '@src/styles/colors';
import { getHeight, getWidth } from '@src/styles/dimensions';
import CountDown from '@src/components/CountDown';
import { containerStyles } from '@src/styles/commonStyles';
import UseTimer from '@src/hook/useTimer';
import Sound from 'react-native-sound';
import useSound from '@src/hook/useSound';
import { convertTimeToSeconds } from '@src/utils/funcs';


const CaseEncounter = () => {

    const { toggleHideButton, caseEncounterTime } = UseTimer({ source: 'caseEncounter' });
    const { playSound } = useSound()

    useEffect(() => {
        playSound('enter_room.mp3')
    }, [])

    useEffect(() => {
        if (caseEncounterTime.time.seconds === 0 && caseEncounterTime.time.minutes === 0) {
            //means time over
            playSound('move_on.mp3')
        }
    }, [caseEncounterTime.time])


    const onPressFinish = () => {
        playSound('move_on.mp3')
    }

    const onCaseEncounterTimeOver = () => {
        playSound('move_on.mp3')
    }

    return (
        <View>
            <AppHeader title='Case encounter time' showBackIcon={true} />
            <View style={[containerStyles]} >
                <View style={[styles.countdown_container]} >
                    <View style={[styles.countdown_ops]} >
                        <TouchableOpacity onPress={() => toggleHideButton('caseEncounterTime')}  >
                            <Icon name={caseEncounterTime.hide ? "eye-slash" : "eye"} size={getWidth(6)} color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity     >
                            <Icon name={true ? "play" : "pause"} size={getWidth(6)} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                    {!caseEncounterTime.hide && <View >
                        <CountDown duration={convertTimeToSeconds(caseEncounterTime.time)} />
                    </View>}
                </View>

                <View style={{ marginTop: getHeight(2) }} >
                    <LongButton title='Finish' onPress={onPressFinish} />
                </View>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    edit_timer: {
        color: colors.white,
        fontSize: 17,
        backgroundColor: colors.primary
    },
    countdown_container: {
        backgroundColor: colors.white,
        elevation: 5,
        paddingHorizontal: getWidth(4),
        paddingVertical: getHeight(2),
        marginTop: getHeight(1),
        // paddingBottom: getHeight(1),
        borderRadius: 4
    },
    countdown_ops: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default CaseEncounter;