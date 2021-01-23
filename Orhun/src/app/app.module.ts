import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import {BookListComponent} from './book-list/book-list.component';
import { BookSearchComponent } from './book-list/book-search/book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { BookService } from './book-list/book.service';
import { StoreModule } from '@ngrx/store';
import { bookListReducer } from './store/book-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookListComponent,
    BookSearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ bookList: bookListReducer })
  ],

  providers: [BookService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
