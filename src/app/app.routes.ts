import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

export const routes: Routes = [
    {
        path: 'inicio',
        title: 'Inicio',
        component: HomeComponent
    },
    {
        path: 'navegacion',
        title: 'Navegacion',
        component: NavbarComponent
    },
    {
        path: 'footer',
        title: 'Footer',
        component: FooterComponent
    }
];
