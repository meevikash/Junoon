import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { RegisterComponent } from './modules/register/register.component';
import { SlickComponent } from './modules/slick/slick.component';
import { SponsorsComponent } from './modules/sponsors/sponsors.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';

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
