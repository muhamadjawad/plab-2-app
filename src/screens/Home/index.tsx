import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppHeader from '../../components/AppHeader';
import colors from '../../styles/colors';
import { containerStyles } from '../../styles/commonStyles';
import { getHeight, getWidth } from '../../styles/dimensions';
import Timer from '../../components/Timer';
import LongButton from '../../components/LongButton';
import RadioButton from '../../components/RadioButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ENCOUNTER_ROUTE, HOME_ROUTE, QUESTION_READING_ROUTE } from '@src/utils/routeConstants';
import { RootStackParamList, TimerType } from '@src/types';
import UseTimer from '@src/hook/useTimer';

type TimerStatusType = {
  time: TimerType,
  hide: boolean
}


const Home = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { onChangeTime, toggleHideButton,
    onChangeQuestion, questionTime,
    caseEncounterTime, question } = UseTimer({ source:'home' })

  return (
    <View>
      <AppHeader title="Timer Settings" />
      <View style={[containerStyles, { paddingTop: getHeight(2) }]}>
        <View  >
          <Text style={[styles.short_heading]}>{'Read Question time'}</Text>
          <View style={{ marginTop: getHeight(1.5) }}>
            <Timer time={questionTime.time} onChangeTimer={(time: TimerType) => onChangeTime(time, 'questionTime')} />
          </View>
          <RadioButton
            label="Hide Timer"
            selected={questionTime.hide}
            onPress={() => toggleHideButton('questionTime')}
          />

          <TextInput
            placeholder="Add Your Question"
            value={question}
            onChangeText={onChangeQuestion}
            style={[styles.question_input]}
            placeholderTextColor={colors.gray}
            multiline={true}
          />

        </View>

        <View style={[styles.encounter_container]}>
          <Text style={[styles.short_heading]}>{'Case Encounter time'}</Text>
          <View style={{ marginTop: getHeight(1.5) }}>
            <Timer time={caseEncounterTime.time} onChangeTimer={(time: TimerType) => onChangeTime(time, 'caseEncounterTime')} />
          </View>
          <RadioButton
            label="Hide Timer"
            selected={caseEncounterTime.hide}
            onPress={() => toggleHideButton('caseEncounterTime')}
          />
        </View>

        <View style={{ marginTop: getHeight(3) }}>
          <LongButton title={'Start'} onPress={() => navigation.navigate('question')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question_input: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    color: colors.primary,
    fontSize: getWidth(3.5),
    marginTop: getHeight(1),
  },
  short_heading: {
    color: colors.black,
    fontSize: getWidth(3.5),
    fontWeight: 'bold',
  },
  encounter_container: {
    marginTop: getHeight(7),
  },
});

export default Home;
