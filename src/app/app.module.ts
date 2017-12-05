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

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    AttendanceFilterComponent,
    AttendanceGridComponent,
    DashboardComponent,
    SalaryComponent
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
