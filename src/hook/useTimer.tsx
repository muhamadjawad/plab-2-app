import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useTimerContext} from '@src/context/TimerContext';
import useSound from '@src/hook/useSound';
import {RootStackParamList, TimerType} from '@src/types';
import {
  DEFAULT_CASEENCOUNTER_TIME,
  DEFAULT_QUESTION_READING_TIME,
} from '@src/utils/constants';
import {useState} from 'react';
import BackgroundTimer from 'react-native-background-timer';

type UseTimerProps = {
  source?: 'home' | 'questionReading' | 'caseEncounter';
};

const UseTimer = ({source = 'home'}: UseTimerProps) => {
  const {
    questionTime,
    setQuestionTime,
    caseEncounterTime,
    setCaseEncounterTime,
    question,
    setQuestion,
  } = useTimerContext();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const {playSound} = useSound();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onChangeTime = (time: TimerType, fieldName: string): void => {
    if (fieldName === 'questionTime') {
      setQuestionTime({...questionTime, time: time});
    } else {
      setCaseEncounterTime({...caseEncounterTime, time: time});
    }
  };

  const toggleHideButton = (fieldName: string) => {
    if (fieldName === 'questionTime') {
      setQuestionTime({...questionTime, hide: !questionTime.hide});
    } else {
      setCaseEncounterTime({
        ...caseEncounterTime,
        hide: !caseEncounterTime.hide,
      });
    }
  };

  const onChangeQuestion = (val: string) => {
    setQuestion(val);
  };

  const decrementTime = (time: TimerType): TimerType => {
    let {hours, minutes, seconds} = time;
    if (seconds > 0) {
      seconds -= 1;
    } else if (minutes > 0) {
      minutes -= 1;
      seconds = 59;
    } else if (hours > 0) {
      hours -= 1;
      minutes = 59;
      seconds = 59;
    }
    return {hours, minutes, seconds};
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const finishTask = () => {
    playSound('move_on.mp3');
    setTimeout(() => {
      returnHome();
      resetBothTimers();
    }, 2000);
  };

  const returnHome = () => {
    navigation.goBack();
  };

  const resetBothTimers = () => {
    setQuestionTime({
      time: {
        hours: DEFAULT_QUESTION_READING_TIME.hours,
        minutes: DEFAULT_QUESTION_READING_TIME.minutes,
        seconds: DEFAULT_QUESTION_READING_TIME.seconds,
      },
      hide: false,
    });
    setCaseEncounterTime({
      time: {
        hours: DEFAULT_CASEENCOUNTER_TIME.hours,
        minutes: DEFAULT_CASEENCOUNTER_TIME.minutes,
        seconds: DEFAULT_CASEENCOUNTER_TIME.seconds,
      },
      hide: false,
    });
  };

  const clearBackgroundTimerInterval = () => {
    BackgroundTimer.stopBackgroundTimer();
  };

  return {
    onChangeTime,
    toggleHideButton,
    onChangeQuestion,
    togglePlay,
    questionTime,
    caseEncounterTime,
    setCaseEncounterTime,
    question,
    isPlaying,
    setQuestionTime,
    decrementTime,
    finishTask,
    clearBackgroundTimerInterval,
  };
};

export default UseTimer;
