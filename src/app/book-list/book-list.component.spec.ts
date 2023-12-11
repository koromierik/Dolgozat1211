import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksListComponent]
    });
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
