import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CuentosComponent } from './pages/cuentos/cuentos.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CuentosComponent,
    ErrorsComponent,
    GalleryComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
