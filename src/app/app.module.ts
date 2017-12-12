import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceFilterComponent } from './attendance/attendance-filter/attendance-filter.component';
import { AttendanceGridComponent } from './attendance/attendance-grid/attendance-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalaryComponent } from './salary/salary.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterComponent } from './employee/employee-filter/employee-filter.component';
import { EmployeeGridComponent } from './employee/employee-grid/employee-grid.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    AttendanceFilterComponent,
    AttendanceGridComponent,
    DashboardComponent,
    SalaryComponent,
    EmployeeComponent,
    EmployeeFilterComponent,
    EmployeeGridComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
