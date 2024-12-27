import {
  Component,
  EventEmitter,
  input,
  Input,
  model,
  output,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  search = model<string>('inital');

  searchButtonClicked = output();

  searchClick() {
    console.log('clicked');
    this.searchButtonClicked.emit();
  }
}
