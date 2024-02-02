import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join-us/join-us.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to /home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join-us', component: JoinComponent },
  { path: 'our-partners', component: OurPartnersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }