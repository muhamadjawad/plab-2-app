import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AppHeader from '@src/components/AppHeader';
import LongButton from '@src/components/LongButton';
import { getHeight, getWidth } from '@src/styles/dimensions';
import { containerStyles } from '@src/styles/commonStyles';
import colors from '@src/styles/colors';
import CountDown from '@src/components/CountDown';

const QuestionReading = () => {
    return (
        <View>
            <AppHeader title="Read Question Time" showBackIcon={true} />
            <View style={[containerStyles]}  >



                <View style={[styles.countdown_container]} >
                    <View style={[styles.countdown_ops]} >
                        <TouchableOpacity  >
                            <Icon name={true ? "eye-slash" : "eye"} size={getWidth(6)} color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity  >
                            <Icon name={true ? "play" : "pause"} size={getWidth(6)} color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity  >
                            <Icon name="edit" size={getWidth(6)} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <CountDown />
                    </View>
                </View>
                <View style={{ marginTop: getHeight(2) }} >
                    <Text style={[styles.question_heading]}>{'Question'}</Text>
                    <View style={[styles.question_container]} >
                        <Text style={[styles.question]}>{'this is actually your question that you asked question that you asked question that you asked question that you asked'}</Text>
                    </View>
                </View>
                <View style={{ marginTop: getHeight(1) }} >
                    <LongButton title='Enter the Room' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    question_heading: {
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    question_container: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 4,
        marginTop: getHeight(1),
        paddingVertical: getHeight(1),
        paddingHorizontal: getWidth(2)

    },
    question: {
        color: colors.primary,
        fontSize: 14,
        textAlign: 'justify'
    },
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
        marginTop:getHeight(1),
        // paddingBottom: getHeight(1),
        borderRadius: 4
    },
    countdown_ops: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default QuestionReading;