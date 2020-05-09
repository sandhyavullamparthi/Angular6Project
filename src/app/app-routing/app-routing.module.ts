import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from '../list-employee/list-employee/list-employee.component';

const appRoutes : Routes = [
  {path:'create',component:CreateEmployeeComponent},
  {path:'list',component:ListEmployeeComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
