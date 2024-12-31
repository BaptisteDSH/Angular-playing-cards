import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PlayingCardComponent, CommonModule, SearchBarComponent],
})
export class AppComponent {
  monsters!: Monster[];
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.search().toLowerCase());
    });
  });

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  });

  constructor() {
    this.monsters = [];

    const monster1 = new Monster();
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
