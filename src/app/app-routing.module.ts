import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent }from './landing-page/landing-page.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';
import { ViewOngsComponent } from './view-ongs/view-ongs.component';

const routes: Routes =
  [
    { path: '', pathMatch: 'full', redirectTo: '/index'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'index', component: LandingPageComponent },
    { path: 'view/ongs', component: ViewOngsComponent },
    { path: 'view/animals', component: ViewAnimalsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }