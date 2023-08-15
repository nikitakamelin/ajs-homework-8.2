import ArrayBufferConverter from '../js/ArrayBufferConverter';

const data = '{"data":{"user":{"id":1,"name":"Daemon","level":10}}}';
const converter = new ArrayBufferConverter(data);

test('ArrayBufferConverter load() test', () => {
  expect(converter.load().length).toBe(53);
});

test('ArrayBufferConverter toString() test', () => {
  const userName = JSON.parse(converter.toString()).data.user.name;

  expect(userName).toBe('Daemon');
});
