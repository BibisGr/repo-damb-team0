import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'navbar',
        title: 'Navbar',
        component: NavbarComponent
    },
    {
        path: 'footer',
        title: 'Footer',
        component: FooterComponent
    }
];
