import AppHeader from '@src/components/AppHeader';
import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LongButton from '@src/components/LongButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '@src/styles/colors';
import { getHeight, getWidth } from '@src/styles/dimensions';
import CountDown from '@src/components/CountDown';
import { containerStyles } from '@src/styles/commonStyles';


const CaseEncounter = () => {
    return (<View>

        <AppHeader title='Case encounter time' showBackIcon={true} />
        <View style={[containerStyles]} >
            <View style={[styles.countdown_container]} >
                <View style={[styles.countdown_ops]} >
                    <TouchableOpacity  >
                        <Icon name={true ? "eye-slash" : "eye"} size={getWidth(6)} color={colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Icon name={true ? "play" : "pause"} size={getWidth(6)} color={colors.black} />
                    </TouchableOpacity>
                </View>
                <View >
                    <CountDown />
                </View>
            </View>

            <View  style={{marginTop:getHeight(2)}} >
                <LongButton  title='Finish' />
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