import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PlayingCardComponent, SearchBarComponent],
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search = '';

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 50;
    this.monster1.figureCaption = 'N°001';
    this.monster1.attackName = 'Thunderbolt';
    this.monster1.attackStrength = 70;
    this.monster1.attackDescription = 'A powerful thunderbolt attack.';
  }

  increaseCount() {
    this.count++;
  }
}
