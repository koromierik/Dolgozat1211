import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BooksListComponent {
  books: any
  constructor(private base: BaseService) {
    this.base.getBooks().subscribe(
      (res) => this.books = res
    )
  }
}