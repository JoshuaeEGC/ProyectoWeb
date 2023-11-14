import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CuentosComponent } from './pages/cuentos/cuentos.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:"login",pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cuentos', component: CuentosComponent},
  {path: 'gallery', component: GalleryComponent},
  { path: '**', component: ErrorsComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
