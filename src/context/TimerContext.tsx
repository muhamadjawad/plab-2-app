import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TimerStatusType, TimerType } from '@src/types';

interface TimerContextProps {
  questionTime: TimerStatusType;
  setQuestionTime: React.Dispatch<React.SetStateAction<TimerStatusType>>;
  caseEncounterTime: TimerStatusType;
  setCaseEncounterTime: React.Dispatch<React.SetStateAction<TimerStatusType>>;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [questionTime, setQuestionTime] = useState<TimerStatusType>({ time: { hours: 0, minutes: 1, seconds: 30 }, hide: false });
  const [question, setQuestion] = useState<string>('');
  const [caseEncounterTime, setCaseEncounterTime] = useState<TimerStatusType>({ time: { hours: 0, minutes: 1, seconds: 30 }, hide: false });


  return (
    <TimerContext.Provider value={{ questionTime, setQuestionTime, caseEncounterTime, setCaseEncounterTime, question, setQuestion }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimerContext = (): TimerContextProps => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};

export { TimerProvider, useTimerContext };
