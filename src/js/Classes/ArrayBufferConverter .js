export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);

    let string = "";
    for (let i = 0; i < bufferView.length; i++) {
      string += String.fromCharCode(bufferView[i]);
    }

    return string;
  }
}
