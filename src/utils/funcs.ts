function toDoubleDigit(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
}

export { toDoubleDigit }