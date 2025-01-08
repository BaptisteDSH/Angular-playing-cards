import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  monsters: Monster[] = [];
  currentIndex: number = 5;

  constructor() {
    this.load();
  }

  getAll(): Monster[] {
    return this.monsters.map((monster) => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find((monster) => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    const monsterIndex = this.monsters.findIndex((m) => m.id === monster.id);

    if (monsterIndex !== -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
    }
    return monsterCopy;
  }

  delete(id: number): void {
    const monsterIndex = this.monsters.findIndex(
      (monster) => monster.id === id
    );
    if (monsterIndex) {
      this.monsters.splice(monsterIndex, 1);
    }

    this.save();
  }

  private save() {
    localStorage.setItem('monster', JSON.stringify(this.monsters));
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentIndex;
    this.currentIndex++;

    this.monsters.push(monsterCopy);

    this.save();

    return monsterCopy;
  }

  private load() {
    const monsterData = localStorage.getItem('monster');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map((monsterJSON: any) =>
        Object.assign(new Monster(), monsterJSON)
      );
      this.currentIndex =
        Math.max(...this.monsters.map((monster) => monster.id)) + 1;
    } else {
      this.init();
      this.save();
    }
  }
  private init() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.id = 1;
    monster1.name = 'Pik';
    monster1.image = 'assets/img/monster.png';
    monster1.type = MonsterType.DARK;
    monster1.hp = 50;
    monster1.figureCaption = 'N°001';
    monster1.attackName = 'Thunderbolt';
    monster1.attackStrength = 70;
    monster1.attackDescription = 'A powerful thunderbolt attack.';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = 2;
    monster2.name = 'Juk';
    monster2.image = 'assets/img/monster2.jpg';
    monster2.type = MonsterType.FIRE;
    monster2.hp = 50;
    monster2.figureCaption = 'N°002';
    monster2.attackName = 'Flame Burst';
    monster2.attackStrength = 80;
    monster2.attackDescription = 'A fiery burst of flame.';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = 3;
    monster3.name = 'tiplouf';
    monster3.image = 'assets/img/monster3.jpg';
    monster3.type = MonsterType.WATER;
    monster3.hp = 70;
    monster3.figureCaption = 'N°003';
    monster3.attackName = 'water blast';
    monster3.attackStrength = 60;
    monster3.attackDescription = 'a powerful water blast attack.';
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = 4;
    monster4.name = 'Bulby';
    monster4.image = 'assets/img/monster4.png ';
    monster4.type = MonsterType.PLANT;
    monster4.hp = 50;
    monster4.figureCaption = 'N°004';
    monster4.attackName = 'plant burst';
    monster4.attackStrength = 70;
    monster4.attackDescription = 'a powerful plant burst attack.';
    this.monsters.push(monster4);
  }
}
