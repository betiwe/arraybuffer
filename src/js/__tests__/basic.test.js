import Character from "../Classes/Character";

const daemon = new Character(2);
const magician = new Character(2);

test('simple attack', () => {
  daemon.attack = 100;
  return expect(daemon.attack).toBe(90);
});

test('attack with stoned', () => {
  magician.attack= 100;
  magician.stoned = true;
  return expect(magician.attack).toBe(85);
});