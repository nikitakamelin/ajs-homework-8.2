import ArrayBufferConverter from '../js/ArrayBufferConverter';

const data = '{"data":{"user":{"id":1,"name":"Daemon","level":10}}}';
const converter = new ArrayBufferConverter(data);

test('ArrayBufferConverter Constructor test', () => {
  expect(converter.data).toBe('{"data":{"user":{"id":1,"name":"Daemon","level":10}}}');
  expect(converter.buffer.byteLength).toBe(106);
});
