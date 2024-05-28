import React, {Component, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AppHeader from '../../containers/AppHeader';
import colors from '../../styles/colors';
import {containerStyles} from '../../styles/commonStyles';
import {getHeight, getWidth} from '../../styles/dimensions';

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
          <Text style={[styles.short_heading]}>{'Set the time'}</Text>

          <TextInput
            placeholder="Add Your Question"
            value={question}
            onChangeText={onChangeQuestion}
            style={[styles.question_input]}
            placeholderTextColor={colors.gray}
            multiline={true}
          />
        </View>
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
  },
  short_heading: {
    color: colors.black,
    fontSize: getWidth(3.5),
    fontWeight: 'bold',
  },
});

export default Home;
