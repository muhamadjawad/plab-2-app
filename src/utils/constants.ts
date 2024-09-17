import { TimerType } from "@src/types";

const DEFAULT_TIMERS: TimerType = { hours: 0, minutes: 0, seconds: 30 }


const DEFAULT_QUESTION_READING_TIME: TimerType = { hours: 0, minutes: 1, seconds: 30 }
const QUESTION_READING_TIME_MAX_LIMIT: TimerType = { hours: 0, minutes: 5, seconds: 0 }

const DEFAULT_CASEENCOUNTER_TIME: TimerType = { hours: 0, minutes: 6, seconds: 59 }
const CASEENCOUNTER_TIME_LIMIT: TimerType = { hours: 0, minutes: 9, seconds: 59 }


export {
    DEFAULT_TIMERS,
    QUESTION_READING_TIME_MAX_LIMIT,
    DEFAULT_QUESTION_READING_TIME,
    CASEENCOUNTER_TIME_LIMIT,
    DEFAULT_CASEENCOUNTER_TIME
}