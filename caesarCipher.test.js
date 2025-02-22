const caesarCipher= require('./caesarCipher');

test('implemente Caesar Cipher', () => {  
    expect(caesarCipher('Caesar', 3)).toBe("Fdhvdu");  
  });