import { MonsterService } from './../../services/monster/monster.service';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css',
})
export class MonsterListComponent {
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
