const numberFormat = (labelValue) => {
  let returnNumber = 0;
  let returnLetter = "";

  if (Math.abs(Number(labelValue)) >= 1.0e9) {
    returnNumber = Math.abs(Number(labelValue)) / 1.0e9;
    returnLetter = "B";
  } else if (Math.abs(Number(labelValue)) >= 1.0e6) {
    returnNumber = Math.abs(Number(labelValue)) / 1.0e6;
    returnLetter = "M";
  } else if (Math.abs(Number(labelValue)) >= 1.0e3) {
    returnNumber = Math.abs(Number(labelValue)) / 1.0e3;
    returnLetter = "K";
  } else {
    returnNumber = Math.abs(Number(labelValue));
  }

  return `${(Math.round(returnNumber * 100) / 100).toFixed(2)}${returnLetter}`;
};

export default numberFormat;
