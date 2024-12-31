import { MonsterService } from './services/monster/monster.service';
import {
  Component,
  computed,
  effect,
  inject,
  model,
  signal,
} from '@angular/core';
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
  MonsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter((monster) => {
      return monster.name.toLowerCase().includes(this.search().toLowerCase());
    });
  });

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters().find(
      (monster, index) => index === this.selectedMonsterIndex()
    );
  });

  constructor() {
    this.monsters.set(this.MonsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();

    this.MonsterService.add(genericMonster);

    this.monsters.set(this.MonsterService.getAll());
  }
}
