import Daemon from "../Classes/Daemon";
import Magician from "../Classes/Magician";

test("Проверка getStoned при false", () => {
  const daemonHero = new Daemon();
  const magicianHero = new Magician();

  expect(daemonHero.getStoned()).toBeFalsy();
  expect(magicianHero.getStoned()).toBeFalsy();
});

test("Проверка setStoned", () => {
  const daemonHero = new Daemon();
  const magicianHero = new Magician();

  daemonHero.setStoned(true);
  magicianHero.setStoned(true);

  expect(daemonHero.getStoned()).toBeTruthy();
  expect(magicianHero.getStoned()).toBeTruthy();
});

test("Проверка getAttack", () => {
  const daemonHero = new Daemon();
  const magicianHero = new Magician();

  expect(daemonHero.getAttack()).toBe(100);
  expect(magicianHero.getAttack()).toBe(100);
});

test.each([
  [2, 90],
  [3, 80],
  [8, 30],
  [10, 10],
  [11, 0],
  [100, 0],
  [-10, 100],
])("Проверка setAttack", (distance, result) => {
  const daemonHero = new Daemon();
  const magicianHero = new Magician();

  daemonHero.setAttack(distance);
  magicianHero.setAttack(distance);

  expect(daemonHero.getAttack()).toBe(result);
  expect(magicianHero.getAttack()).toBe(result);
});

test.each([
  [2, 85],
  [3, 72],
  [8, 15],
  [10, 0],
  [100, 0],
  [-10, 100],
])("Проверка setAttack при stoned=true", (distance, result) => {
  const daemonHero = new Daemon();
  const magicianHero = new Magician();

  daemonHero.setStoned(true);
  magicianHero.setStoned(true);

  daemonHero.setAttack(distance);
  magicianHero.setAttack(distance);

  expect(daemonHero.getAttack()).toBe(result);
  expect(magicianHero.getAttack()).toBe(result);
});
