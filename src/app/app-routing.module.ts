import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { SlickComponent } from './components/slick/slick.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  // {
    // path: 'about',
    // component: AboutComponent,
  // },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'slick',
    component: SlickComponent,
  },
  {
    path: 'sponsors',
    component: SponsorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
