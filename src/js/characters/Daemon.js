import Character from "../Character";

export default class Daemon extends Character {
  constructor(level) {
    super(level);
    this.defence = 10;
    this.type = 'Daemon';
    this._stoned = false;
    this._attack = 100;
    this._distance = 1;
  }

  set stoned(val) {
    if (typeof val === 'boolean') {
      this._stoned = val;
    } else {
      throw new Error('Неверный тип переменной дурмана')
    }
  }

  get stoned() {
    return this._stoned;
  }

  set distance(val) {
    this._distance = val;
  }

  get distance() {
    return this._distance;
  }

  set attack(val) {
    this._attack = val;
  }

  get attack() {
    return this._attack - ((this.distance * 10 - 10) + (this.stoned ? Math.log2(this.distance) * 5 : 0)).toFixed(2);
  }

  count() {
    //console.log(this._attack - ((this.distance * 10 - 10) + (this.stoned ? Math.log2(this.distance) * 5 : 0)).toFixed(2));
    //console.log(this._attack)
  }
}