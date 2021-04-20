const uniq = require('./uniq');

describe('uniq function', () => {
  it('show in an array only unique value extracted from another array', () => {});
  expect(uniq(['🐑', 1, 2, '🐑', '🐑', 3])).toEqual(['🐑', 1, 2, 3]);
});
