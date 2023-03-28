const nm2mn = require('./T00l0l');

test('300000000 converts to гурван зуун сая', () => {
  expect(nm2mn(300000000)).toBe('гурван зуун сая');
});


test('300000000000 converts to гурван зуун тэрбум', () => {
  expect(nm2mn(300000000000)).toBe('гурван зуун тэрбум');
});
