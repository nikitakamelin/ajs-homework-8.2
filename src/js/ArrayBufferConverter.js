export default class ArrayBufferConverter {
  constructor(data) {
    this.data = data;
    this.buffer = new ArrayBuffer(data.length * 2);
  }

  // загружает строку в буфер, возвращает в виде представления Uint16Array
  // c аски-кодами вместо символов
  load() {
    const bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < this.data.length; i++) {
      bufferView[i] = this.data.charCodeAt(i);
    }
    return bufferView;
  }

  // переводит содержимое буфера в строку (через представление полученное методом load)
  toString() {
    const string = [];

    for (let i = 0; i < this.load().length; i++) {
      string[i] = String.fromCharCode(this.load()[i]);
    }
    return string.join('');
  }
}
