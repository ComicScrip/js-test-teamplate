const celiusToFarenheit = require('./celiusToFarenheit');

describe('the celiusToFarenheit function', () => {
  it('should convert celcius degrees correctly into farenheit degrees with integers', function () {
    expect(celiusToFarenheit(0)).toBe(32.0);
    expect(celiusToFarenheit(5)).toBe(41.0);
  });
  it('should convert celcius degrees correctly into farenheit degrees with floats', () => {
    expect(celiusToFarenheit(1.52)).toBe(34.74);
  });

  it('should convert celcius degrees correctly into farenheit degrees with floats with arbitrary precision', () => {
    expect(celiusToFarenheit(1.52, 3)).toBe(34.736);
  });
});
