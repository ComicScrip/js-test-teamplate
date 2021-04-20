const celiusToFarenheit = (degreesCelsius, precision = 2) => {
  //(0 °C × 9/5) + 32 = 32 °F
  // 2 : 100 = 10^2
  // 3 : 1000 = 10^3
  // 4 : 10000 = 10^4

  const factor = 10 ** precision;
  return Math.round(factor * ((degreesCelsius * 9) / 5 + 32)) / factor;
};

module.exports = celiusToFarenheit;
