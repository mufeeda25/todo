import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'register', component: RegistrationComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'add' ,component:AddComponent
  },
  {
    path:'edit/:id' ,component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
