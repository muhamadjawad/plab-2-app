import colors from '@src/styles/colors';
import { getHeight } from '@src/styles/dimensions';
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const CountDown = () => {
    return (
        <View style={[styles.main]}    >
            <CountdownCircleTimer
                isPlaying
                duration={90}
                colors={['#3bb44a', '#3bb14a', '#3bb44a', '#3bb44f']}
                colorsTime={[7, 5, 2, 0]}
                // isSmoothColorTransition={true}
            // isGrowing={true}
            >
                {({ remainingTime }) => {
                    const minutes = Math.floor((remainingTime % 3600) / 60)
                    const seconds = remainingTime % 60
                    return (<Text style={[styles.time]}>{`${minutes}:${seconds}`}</Text>)
                }}
            </CountdownCircleTimer>
        </View>
    );
}
const styles = StyleSheet.create({

    main: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getHeight(2),
    },
    time: {
        color: colors.gray,
        fontSize: 38,
        fontWeight: 'bold'
    },
})
export default CountDown;