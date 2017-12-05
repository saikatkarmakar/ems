import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SalaryComponent } from './salary/salary.component';

const routing: Routes = [
    {
        path: "",
        component: DashboardComponent
    },    
    {
        path: "attendance",
        component: AttendanceComponent
    },
    {
        path: "attendance/:id",
        component: AttendanceComponent
    },
    {
        path: "salary",
        component: SalaryComponent
    },
    {
        path: "**",
        component: DashboardComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);