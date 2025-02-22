const calculator = require('./calculator');


test('Calculator addition test', () => {  
    expect(calculator.add(2,6)).toBe(8);  
  });

  test('Calculator subtraction test', () => {  
    expect(calculator.subtract(8,2)).toBe(6);  
  });

  test('Calculator multiplication test', () => {  
    expect(calculator.multiply(4,5)).toBe(20);  
  });

  test('Calculator division test', () => {  
    expect(calculator.divide(10,2)).toBe(5);  
  });