import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EmployeeComponent } from './components/employee/employee.component';
//import { AboutComponent } from './components/about/about.component';
;

const routes: Routes = [
  {path:'', redirectTo :"/about", pathMatch:'full'},
  {path: "home",loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
//   {path: 'employee', component: EmployeeComponent},
//   {path:'about', component: AboutComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
