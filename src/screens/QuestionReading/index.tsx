import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AppHeader from '@src/components/AppHeader';
import LongButton from '@src/components/LongButton';
import {getHeight, getWidth} from '@src/styles/dimensions';
import {containerStyles} from '@src/styles/commonStyles';
import colors from '@src/styles/colors';
import CountDown from '@src/components/CountDown';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList, TimerType} from '@src/types';
import UseTimer from '@src/hook/useTimer';
import {convertTimeToSeconds} from '@src/utils/funcs';
import SelectTimerModal from '@src/components/SelectTimerModal';
import useSound from '@src/hook/useSound';
import {QUESTION_READING_TIME_MAX_LIMIT} from '@src/utils/constants';
import BackgroundTimer from 'react-native-background-timer';

const QuestionReading = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [isQuestionTimeEdited, setIsQuestionTimeEdited] =
    useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(300);

  const {
    questionTime,
    question,
    toggleHideButton,
    onChangeTime,
    togglePlay,
    isPlaying,
    setQuestionTime,
    decrementTime,
    clearBackgroundTimerInterval,
  } = UseTimer({source: 'questionReading'});
  const {playSound, onTimeLessThan2} = useSound();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTotalTime(convertTimeToSeconds(questionTime.time));
    playSound('buzzer.mp3', () => playSound('begin.mp3'));
  }, []);

  useEffect(() => {
    let durationInterval: NodeJS.Timeout;
    if (isPlaying) {
      BackgroundTimer.runBackgroundTimer(() => {
        setQuestionTime(prevState => ({
          ...prevState,
          time: decrementTime(prevState.time),
        }));
      }, 1000);

      // durationInterval = setInterval(() => {
      //   setQuestionTime(prevState => ({
      //     ...prevState,
      //     time: decrementTime(prevState.time),
      //   }));
      // }, 1000);

      // setIntervalId(durationInterval);
    } else {
      clearBackgroundTimerInterval();
      // clearInterval(durationInterval!);
    }

    return () => {
      // clearBackgroundTimerInterval();
    };
  }, [isPlaying]);

  useEffect(() => {
    if (questionTime.time.seconds === 0 && questionTime.time.minutes === 0) {
      //means time over
      clearBackgroundTimerInterval();
      onQuestionTimeOver();
    } else if (
      questionTime.time.seconds === 0 &&
      questionTime.time.minutes === 2
    ) {
      onTimeLessThan2();
    }
  }, [questionTime.time]);

  useEffect(() => {
    if (isQuestionTimeEdited) {
      setIsQuestionTimeEdited(false);
      playSound('begin.mp3');
      setTotalTime(convertTimeToSeconds(questionTime.time));
    }
  }, [isQuestionTimeEdited]);

  const onQuestionTimeOver = () => {
    goToEncounterScreen();
  };

  const goToEncounterScreen = () => {
    clearBackgroundTimerInterval();

    navigation.dispatch(StackActions.replace('encounter'));
  };

  return (
    <View>
      <AppHeader title="Read Question Time" showBackIcon={true} />
      <View style={[containerStyles]}>
        <SelectTimerModal
          showPicker={showPicker}
          setShowPicker={setShowPicker}
          onChangeTimer={(time: TimerType) => {
            onChangeTime(time, 'questionTime');
            setIsQuestionTimeEdited(true);
          }}
          timeLimit={{
            hours: QUESTION_READING_TIME_MAX_LIMIT.hours,
            minutes: QUESTION_READING_TIME_MAX_LIMIT.minutes,
            seconds: QUESTION_READING_TIME_MAX_LIMIT.seconds,
          }}
        />
        <View style={[styles.countdown_container]}>
          <View style={[styles.countdown_ops]}>
            <TouchableOpacity onPress={() => toggleHideButton('questionTime')}>
              <Icon
                name={questionTime.hide ? 'eye-slash' : 'eye'}
                size={getWidth(6)}
                color={colors.black}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlay}>
              <Icon
                name={isPlaying ? 'pause' : 'play'}
                size={getWidth(6)}
                color={colors.black}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <Icon name="edit" size={getWidth(6)} color={colors.black} />
            </TouchableOpacity>
          </View>
          {!questionTime.hide && (
            <View>
              <CountDown
                duration={convertTimeToSeconds(questionTime.time)}
                totalTime={totalTime}
              />
            </View>
          )}
        </View>
        <View style={{marginTop: getHeight(2)}}>
          <Text style={[styles.question_heading]}>{'Question'}</Text>
          <View style={[styles.question_container]}>
            <Text style={[styles.question]}>{question}</Text>
          </View>
        </View>
        <View style={{marginTop: getHeight(1)}}>
          <LongButton title="Enter the Room" onPress={goToEncounterScreen} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
    paddingHorizontal: getWidth(2),
  },
  question: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'justify',
  },
  edit_timer: {
    color: colors.white,
    fontSize: 17,
    backgroundColor: colors.primary,
  },
  countdown_container: {
    backgroundColor: colors.white,
    elevation: 5,
    paddingHorizontal: getWidth(4),
    paddingVertical: getHeight(2),
    marginTop: getHeight(1),
    // paddingBottom: getHeight(1),
    borderRadius: 4,
  },
  countdown_ops: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default QuestionReading;
