import Character from './character';

export default class Bowman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

const bowman = new Bowman('f', 'Bowman');
console.log(bowman);
