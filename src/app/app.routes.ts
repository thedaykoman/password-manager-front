import { Routes } from '@angular/router';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { HomeRegisterComponent } from './pages/home-register/home-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "login",
        component: HomeLoginComponent
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: 'full'
    },
    {
        path: "register",
        component: HomeRegisterComponent,
    },
    {
        path: "dashboard",
        component: DashboardComponent,
    }
];
