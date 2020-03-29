const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate a Unique ID', () => {
  it('should be generate a unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(16);
  })
});