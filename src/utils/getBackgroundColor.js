// Lotto Balls BackgroundColor
const getBackgroundColor = (number) => {
  if (number >= 1 && number <= 10) {
    return "#f2b720";
  } else if (number >= 11 && number <= 20) {
    return "#4072ac";
  } else if (number >= 21 && number <= 30) {
    return "#de4c0e";
  } else if (number >= 31 && number <= 40) {
    return "#9195a4";
  } else if (number >= 41 && number <= 45) {
    return "#13be4b";
  } else {
    return "#fff";
  }
};

export default getBackgroundColor;
