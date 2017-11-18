import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceFilterComponent } from './attendance/attendance-filter/attendance-filter.component';
import { AttendanceGridComponent } from './attendance/attendance-grid/attendance-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    AttendanceFilterComponent,
    AttendanceGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
