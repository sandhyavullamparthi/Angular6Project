import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee/list-employee.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
