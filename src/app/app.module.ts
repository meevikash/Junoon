import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { SlickComponent } from './components/slick/slick.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    RegisterComponent,
    SlickComponent,
    SponsorsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
