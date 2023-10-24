const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});


describe('#result should be', () => {
  test('output should be', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });

  test('output should be', () => {
    expect(timeWord('00:12')).toEqual('twelve twelve am');
  });

  test('output should be', () => {
    expect(timeWord('01:00')).toEqual(`one o'clock am`);
  });

  test('output should be', () => {
    expect(timeWord('06:01')).toEqual('six oh one am');
  });

  test('output should be', () => {
    expect(timeWord('06:10')).toEqual('six ten am');
  });

  test('output should be', () => {
    expect(timeWord('06:18')).toEqual('six eighteen am');
  });

  test('output should be', () => {
    expect(timeWord('06:30')).toEqual('six thirty  am');
  });

  test('output should be', () => {
    expect(timeWord('10:34')).toEqual('ten thirty four am');
  });

  test('output should be', () => {
    expect(timeWord('12:00')).toEqual('noon');
  });

  test('output should be', () => {
    expect(timeWord('12:09')).toEqual('twelve oh nine pm');
  });

  test('output should be', () => {
    expect(timeWord('23:23')).toEqual('eleven twenty three pm');
  });
});








