import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';

export const routes: Routes = [
    {
        path:'home',
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
