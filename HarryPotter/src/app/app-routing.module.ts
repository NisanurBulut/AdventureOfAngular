import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent, BooksComponent, StaffComponent,StudentsComponent, HousesComponent, FilmsComponent } from './components';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'films', component: FilmsComponent },
  { path: '**', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
