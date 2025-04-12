import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'', redirectTo :"/about", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path:'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
