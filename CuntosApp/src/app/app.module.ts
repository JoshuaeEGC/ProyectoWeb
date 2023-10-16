import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GptComponent } from './gpt/gpt.component';
import { DallEComponent } from './dall-e/dall-e.component';
import { MongoBDComponent } from './mongo-bd/mongo-bd.component';
import { LoginComponent } from './pages/login/login.component';
import { CuentosComponent } from './pages/cuentos/cuentos.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GptComponent,
    DallEComponent,
    MongoBDComponent,
    LoginComponent,
    CuentosComponent,
    ErrorsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
