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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    CharactersComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
