import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'wea5-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent {

  @Input() book: Book = new Book();
  @Output() showListEvent = new EventEmitter<void>();

  showList() {
    
  }
}
