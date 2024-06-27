import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
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


                <CountDown />
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
    }
})
export default QuestionReading;