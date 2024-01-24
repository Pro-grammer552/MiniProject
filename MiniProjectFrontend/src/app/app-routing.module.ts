import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: EmployeeListComponent },
  {path:'view/:id',component:ViewDetailsComponent},
  {path:'edit/:id',component:EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
