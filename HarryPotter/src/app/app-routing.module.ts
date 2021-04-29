import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'students', component: StudentsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
