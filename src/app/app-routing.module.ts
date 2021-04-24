import { DepartmentComponent } from './department/department.component';
import { ActivityComponent } from './activity/activity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'department', component: DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }