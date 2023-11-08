import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(
    private bookStore: BookStoreService
  ) {}

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }

  ngOnInit(): void {
    
  }

}
