const celsiusToFarenheit = require('./celsiusToFarenheit');

describe('the celsiusToFarenheit function', () => {
  it('should convert celsius degrees correctly into farenheit degrees with integers', function () {
    expect(celsiusToFarenheit(0)).toBe(32.0);
    expect(celsiusToFarenheit(5)).toBe(41.0);
  });
  it('should convert celsius degrees correctly into farenheit degrees with floats', () => {
    expect(celsiusToFarenheit(1.52)).toBe(34.74);
  });

  it('should convert celsius degrees correctly into farenheit degrees with floats with arbitrary precision', () => {
    expect(celsiusToFarenheit(1.52, 3)).toBe(34.736);
  });
});
