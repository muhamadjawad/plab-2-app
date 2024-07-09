import { useTimerContext } from '@src/context/TimerContext';
import { TimerType } from '@src/types'
import React, { Component } from 'react'

const UseTimer = () => {

    const { questionTime, setQuestionTime, caseEncounterTime, setCaseEncounterTime, question, setQuestion } = useTimerContext();


    const onChangeTime = (time: TimerType, fieldName: string): void => {
        if (fieldName === 'questionTime') {
            setQuestionTime({ ...questionTime, time: time })
        }
        else {
            setCaseEncounterTime({ ...caseEncounterTime, time: time })
        }
    }

    const toggleHideButton = (fieldName: string) => {
        if (fieldName === 'questionTime') {
            setQuestionTime({ ...questionTime, hide: !questionTime.hide })
        }
        else {
            setCaseEncounterTime({ ...caseEncounterTime, hide: !caseEncounterTime.hide })
        }
    }

    const onChangeQuestion = (val: string) => {
        setQuestion(val);
    };


    return {
        onChangeTime,
        toggleHideButton,
        onChangeQuestion,
        questionTime,
        caseEncounterTime,
        question

    };
}

export default UseTimer;