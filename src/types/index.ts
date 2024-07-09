import { ENCOUNTER_ROUTE, HOME_ROUTE, QUESTION_READING_ROUTE } from "@src/utils/routeConstants";

export type RootStackParamList = {
    'home': undefined;
    'question': undefined;
    'encounter': undefined;
    // [key in typeof HOME_ROUTE | typeof QUESTION_READING_ROUTE | typeof ENCOUNTER_ROUTE]: undefined;
};

export interface TimerType {
    hours: number;
    minutes: number;
    seconds: number
}

export interface TimerStatusType  {
    time: TimerType;
    hide: boolean;
};
