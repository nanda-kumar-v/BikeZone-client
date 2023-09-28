import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeropageComponent } from './heropage/heropage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RentsComponent } from './rents/rents.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WhyusComponent } from './whyus/whyus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RentDashboardComponent } from './rent-dashboard/rent-dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path:"", component:HeropageComponent
  },
  {
    path:"header", component:HeaderComponent
  },
  {
    path:"footer", component:FooterComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:"rents", component:RentsComponent
  },
  {
    path:"whyus", component:WhyusComponent
  },
  {
    path:"aboutus", component:AboutusComponent
  },
  {
    path:"rent-dashboard", component:RentDashboardComponent
  },
  {
    path:"admin-login", component:AdminloginComponent
  },
  {
    path:"**", component:PagenotfoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
