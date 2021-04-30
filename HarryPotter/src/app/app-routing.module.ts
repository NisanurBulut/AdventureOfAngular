import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components';
import { StaffComponent } from './components/staff/staff.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'staff', component: StaffComponent },
  { path: '**', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
