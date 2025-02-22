const capitalize = require('./capitalize');

test('transform check to Check', () => {  
    expect(capitalize("check")).toBe("Check");  
  });