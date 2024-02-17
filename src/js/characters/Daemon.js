import Character from "../Character";

export default class Daemon extends Character {
  constructor(level) {
    super(level);
    this.attack = 100;
    this.defence = 10;
    this.type = 'Daemon';
    this._stoned = false;
    this._attack = this.attack;
  }

  set stoned(val) {
    this._stoned = val;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(val) {
    this._attack = val;
  }

  get attack() {
    return this._attack;
  }
}