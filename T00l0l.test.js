const nm2mn = require('./T00l0l');

console.log(nm2mn);

test('300000000 converts to гурван зуун сая', () => {
  expect(nm2mn(300000000)).toBe('гурван зуун сая');
});
