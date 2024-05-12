export default class Character {
  constructor() {
    this.stoned = false;
    this.distance = 1;
  }

  setStoned(value) {
    this.stoned = value;
  }

  setAttack(distance) {
    if (distance > 0) {
      this.distance = distance;
    }
    if (this.stoned) {
      this.attack = Number(
        (
          this.attack * (1 - 0.1 * (this.distance - 1)) -
          Math.log2(this.distance) * 5
        ).toFixed(0)
      );
    } else {
      this.attack = Number(
        (this.attack * (1 - 0.1 * (this.distance - 1))).toFixed(0)
      );
    }
  }

  getStoned() {
    return this.stoned;
  }

  getAttack() {
    if (this.attack < 0 || this.attack > 100) {
      this.attack = 0;
    }

    return this.attack;
  }
}
