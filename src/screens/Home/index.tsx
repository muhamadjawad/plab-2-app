import React, {Component, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import colors from '../../styles/colors';
import {containerStyles} from '../../styles/commonStyles';
import {getHeight, getWidth} from '../../styles/dimensions';
import Timer from '../../components/Timer';
import LongButton from '../../components/LongButton';

const Home = () => {
  const [question, setQuestion] = useState<string>('sasjssjan');

  const onChangeQuestion = (val: string) => {
    setQuestion(val);
  };

  return (
    <View>
      <AppHeader title="Timer Settings" />
      <View style={[containerStyles, {paddingTop: getHeight(2)}]}>
        <View>
          <Text style={[styles.short_heading]}>{'Read Question time'}</Text>
          <Timer />
          <TextInput
            placeholder="Add Your Question"
            value={question}
            onChangeText={onChangeQuestion}
            style={[styles.question_input]}
            placeholderTextColor={colors.gray}
            multiline={true}
          />
        </View>

        <LongButton title={'buton'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question_input: {
    borderColor: colors.primary,
    borderWidth: 1,
    color: colors.primary,
    fontSize: getWidth(3.5),
    marginTop: getHeight(2),
  },
  short_heading: {
    color: colors.black,
    fontSize: getWidth(3.5),
    fontWeight: 'bold',
  },
});

export default Home;
