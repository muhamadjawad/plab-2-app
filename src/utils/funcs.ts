import { TimerType } from "@src/types";

function toDoubleDigit(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
}

const convertTimeToSeconds = (time: TimerType): number => {
    let duration = (time.minutes * 60) + (time.seconds)
    return duration
}

export { toDoubleDigit, convertTimeToSeconds }