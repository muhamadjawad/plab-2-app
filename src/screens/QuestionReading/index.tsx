import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
// import AppHeader from '../../components/AppHeader';
import AppHeader from '@src/components/AppHeader';

const QuestionReading = () => {
    return (
        <View>
            <AppHeader title="Read Question Time"  showBackIcon={true}/>
        </View>
        );
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default QuestionReading;