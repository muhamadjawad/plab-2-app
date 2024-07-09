import { useTimerContext } from '@src/context/TimerContext';
import { TimerType } from '@src/types';
import React, { useEffect, useState } from 'react';

type UseTimerProps = {
  source?: 'home' | 'questionReading';
};

const UseTimer = ({ source = 'home' }: UseTimerProps) => {
  const { questionTime, setQuestionTime, caseEncounterTime, setCaseEncounterTime, question, setQuestion } = useTimerContext();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    let durationInterval: any;
    if (source === 'questionReading' && isPlaying) {
      durationInterval = setInterval(() => {
        setQuestionTime(prevState => ({
          ...prevState,
          time: decrementTime(prevState.time),
        }));
      }, 1000);
    } else {
      clearInterval(durationInterval);
    }

    return () => {
      clearInterval(durationInterval);
    };
  }, [isPlaying]);

  const onChangeTime = (time: TimerType, fieldName: string): void => {
    if (fieldName === 'questionTime') {
      setQuestionTime({ ...questionTime, time: time });
    } else {
      setCaseEncounterTime({ ...caseEncounterTime, time: time });
    }
  };

  const toggleHideButton = (fieldName: string) => {
    if (fieldName === 'questionTime') {
      setQuestionTime({ ...questionTime, hide: !questionTime.hide });
    } else {
      setCaseEncounterTime({ ...caseEncounterTime, hide: !caseEncounterTime.hide });
    }
  };

  const onChangeQuestion = (val: string) => {
    setQuestion(val);
  };

  const decrementTime = (time: TimerType): TimerType => {
    let { hours, minutes, seconds } = time;
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
    return { hours, minutes, seconds };
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return {
    onChangeTime,
    toggleHideButton,
    onChangeQuestion,
    togglePlay,
    questionTime,
    caseEncounterTime,
    question,
    isPlaying,
  };
};

export default UseTimer;
