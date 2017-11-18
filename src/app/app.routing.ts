import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';

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
        path: "**",
        component: DashboardComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);