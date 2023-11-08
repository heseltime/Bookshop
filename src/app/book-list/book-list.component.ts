import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'wea5-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
