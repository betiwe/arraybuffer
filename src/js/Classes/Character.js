export default class Character {
  constructor(distance) {
    this.characterStoned = false;
    this.distance = distance;
  }

  set stoned(value) {
    this.characterStoned = value;
  }

  get stoned() {
    return this.characterStoned;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    const attackDamage = new Float64Array(5);

    for (let i = 0; i < attackDamage.length; i += 1) {
      attackDamage[i] = 1 - i / 10;
    }

    if (this.stoned) {
      const stonedDamage = new Float64Array(5);
      for (let i = 0; i < stonedDamage.length; i += 1) {
        stonedDamage[i] = Math.log2(i + 1) * 5;
      }
      return Math.round(
        this.attackValue * attackDamage[this.distance - 1] -
          stonedDamage[this.distance - 1]
      );
    }
    return Math.round(this.attackValue * attackDamage[this.distance - 1]);
  }
}
