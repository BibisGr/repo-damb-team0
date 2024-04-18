import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [

    {path:'home', title:'Home', component:HomeComponent},
    {path:'navbar', title:'Navbar', component:NavbarComponent},
    {path:'footer', title:'Footer', component:FooterComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**', title:'PAGE NOT FOUND', component:PageNotFoundComponent}





];
