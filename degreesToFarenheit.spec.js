const degreesToFarenheit = require('./degreesToFarenheit');

describe('the degreesToFarenheit function', () => {
  it('should work', () => {
    expect(degreesToFarenheit(0)).toBe(32);
  });
});
