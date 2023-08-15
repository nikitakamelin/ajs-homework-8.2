import ArrayBufferConverter from './js/ArrayBufferConverter';

console.log('started!');

const data = '{"data":{"user":{"id":1,"name":"Daemon","level":10}}}';

const converter = new ArrayBufferConverter(data);

console.log(converter.load());
console.log(converter.toString());
// console.log(JSON.parse(converter.toString()));
