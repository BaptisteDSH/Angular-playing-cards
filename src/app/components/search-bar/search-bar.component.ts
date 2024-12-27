import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() search = 'inital';

  @Output() searchChange = new EventEmitter<string>();

  @Output('submit') searchButtonClicked = new EventEmitter();

  searchClick() {
    console.log('clicked');
    this.searchButtonClicked.emit();
  }

  updateSearch(value: string) {
    this.searchChange.emit(value);
  }
}
