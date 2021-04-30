import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students/students.component';
import { AppService } from './app.service';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './components/staff/staff.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    CharactersComponent,
    StudentsComponent,
    PersonItemComponent,
    StaffComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
