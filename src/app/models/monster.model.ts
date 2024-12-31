import { MonsterType } from '../utils/monster.utils';

export class Monster {
  name: string = 'My Monster';
  image: string = 'assets/monster.png';
  type: MonsterType = MonsterType.DARK;
  hp: number = 40;
  figureCaption: string = 'N°001';
  attackName: string = 'Fireball';
  attackStrength: number = 60;
  attackDescription: string = 'A powerful fireball attack.';
}
