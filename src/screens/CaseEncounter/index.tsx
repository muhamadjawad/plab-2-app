import AppHeader from '@src/components/AppHeader';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LongButton from '@src/components/LongButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '@src/styles/colors';
import {getHeight, getWidth} from '@src/styles/dimensions';
import CountDown from '@src/components/CountDown';
import {containerStyles} from '@src/styles/commonStyles';
import UseTimer from '@src/hook/useTimer';
import useSound from '@src/hook/useSound';
import {convertTimeToSeconds} from '@src/utils/funcs';
import BackgroundTimer from 'react-native-background-timer';

const CaseEncounter = () => {
  const [totalTime, setTotalTime] = useState<number>(300);

  const {
    toggleHideButton,
    caseEncounterTime,
    decrementTime,
    isPlaying,
    setCaseEncounterTime,
    finishTask,
    togglePlay,
    clearBackgroundTimerInterval,
  } = UseTimer({source: 'caseEncounter'});
  const {playSound, onTimeLessThan2} = useSound();

  useEffect(() => {
    setTotalTime(convertTimeToSeconds(caseEncounterTime.time));

    playSound('buzzer.mp3', () => playSound('enter_room.mp3'));
  }, []);

  useEffect(() => {
    if (
      caseEncounterTime.time.seconds === 0 &&
      caseEncounterTime.time.minutes === 0
    ) {
      //means time over
      clearBackgroundTimerInterval();
      finishTask();
      playSound('move_on.mp3');
    } else if (
      caseEncounterTime.time.seconds === 0 &&
      caseEncounterTime.time.minutes === 2
    ) {
      onTimeLessThan2();
    }
  }, [caseEncounterTime.time]);

  useEffect(() => {
    let durationInterval: NodeJS.Timeout;
    if (isPlaying) {
      // durationInterval = setInterval(() => {
      //   setCaseEncounterTime(prevState => ({
      //     ...prevState,
      //     time: decrementTime(prevState.time),
      //   }));
      // }, 1000);

      BackgroundTimer.runBackgroundTimer(() => {
        setCaseEncounterTime(prevState => ({
          ...prevState,
          time: decrementTime(prevState.time),
        }));
      }, 1000);
    } else {
      clearBackgroundTimerInterval();
    }

    return () => {
      clearBackgroundTimerInterval();
    };
  }, [isPlaying]);

  return (
    <View>
      <AppHeader title="Case encounter time" showBackIcon={true} />
      <View style={[containerStyles]}>
        <View style={[styles.countdown_container]}>
          <View style={[styles.countdown_ops]}>
            <TouchableOpacity
              onPress={() => toggleHideButton('caseEncounterTime')}>
              <Icon
                name={caseEncounterTime.hide ? 'eye-slash' : 'eye'}
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
          </View>
          {!caseEncounterTime.hide && (
            <View>
              <CountDown
                duration={convertTimeToSeconds(caseEncounterTime.time)}
                totalTime={totalTime}
              />
            </View>
          )}
        </View>

        <View style={{marginTop: getHeight(2)}}>
          <LongButton
            title="Finish"
            onPress={() => {
              finishTask();
              clearBackgroundTimerInterval();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default CaseEncounter;
