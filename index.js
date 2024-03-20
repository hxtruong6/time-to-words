// expecting time to be a string in the format like '8:15' or '12:30'

const NUMBER_TO_WORD = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-nine",
  30: "half",
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  // 2:30 ; 4:45 ; 12:00
  // > Hours:Minutes

  // Miniute = 00 -> o'clock ; 15-mins, 30-mins
  // 45 mins -> quarter to somethings.
  // 0 < Minutes < 30 -> minute past hours
  // 30 < Minutes < 60 -> (60-minutes) to (hours +1)

  // DOC: Check va;ide time
  if (!/^\d{1,2}:\d{2}$/.test(time)) {
    return "Invalid time format";
  }

  // DOC: Split hours and minutes
  let [hours, minutes] = time.split(":").map((num) => parseInt(num, 10));
  if (hours > 23 || minutes > 59) {
    return "Invalid time";
  }

  if (time === "0:00") {
    return "midnight";
  }
  if (time === "12:00") {
    return "midday";
  }

  const hourWord = NUMBER_TO_WORD[hours % 12] || NUMBER_TO_WORD[12];
  const nextHourWord = NUMBER_TO_WORD[(hours + 1) % 12] || NUMBER_TO_WORD[12];
  minutes = parseInt(minutes, 10);

  if (minutes === 0) {
    return `${hourWord} o'clock`;
  }
  if (minutes === 15) {
    return `quarter past ${hourWord}`;
  }
  if (minutes === 30) {
    return `half past ${hourWord}`;
  }
  if (minutes === 45) {
    return `quarter to ${nextHourWord}`;
  }
  if (minutes < 30) {
    return `${NUMBER_TO_WORD[minutes]} past ${hourWord}`;
  }
  return `${NUMBER_TO_WORD[60 - minutes]} to ${nextHourWord}`;
}

console.log(convertTimeToWords("3:14"));
console.log(convertTimeToWords("0:00"));
console.log(convertTimeToWords("12:00"));
console.log(convertTimeToWords("10:45"));

module.exports = { convertTimeToWords };
