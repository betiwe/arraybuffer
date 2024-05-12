import getBuffer from "../getBuffer";
import ArrayBufferConverter from "../Classes/ArrayBufferConverter ";

test("Проверка load", () => {
  const buffer = getBuffer();
  const newArrayBufferConverter = new ArrayBufferConverter();

  newArrayBufferConverter.load(buffer);

  expect(newArrayBufferConverter.buffer).toBe(buffer);
});

test("Проверка toString", () => {
  const buffer = getBuffer();
  const newArrayBufferConverter = new ArrayBufferConverter();

  newArrayBufferConverter.load(buffer);

  expect(newArrayBufferConverter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
});
