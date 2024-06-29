import { Routes } from '@angular/router';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { HomeRegisterComponent } from './pages/home-register/home-register.component';

export const routes: Routes = [
    {
        path: "login",
        component: HomeLoginComponent
    },
    {
        path: "",
        component: HomeLoginComponent
    },
    {
        path: "register",
        component: HomeRegisterComponent
    }
];
