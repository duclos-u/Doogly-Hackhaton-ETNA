import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotexistComponent } from './notexist/notexist.component';
import { ProPageComponent } from './pro-page/pro-page.component';
import { DashboardProComponent } from './dashboard-pro/dashboard-pro.component';
import { DashboardPersoComponent } from './dashboard-perso/dashboard-perso.component';
import { StoryProComponent } from './story-pro/story-pro.component';
import { SignupProComponent } from './signup-pro/signup-pro.component';
import { SignupParComponent } from './signup-par/signup-par.component';
import { SigninProComponent } from './signin-pro/signin-pro.component';
import { SigninParComponent } from './signin-par/signin-par.component';

const routes: Routes = [
  {path: 'doogly', component: HomeComponent},
  {path: 'doogly/proPage' , component: ProPageComponent},
  {path: 'doogly/proDashboard', component: DashboardProComponent},
  {path: 'doogly/persoDashboard', component: DashboardPersoComponent},
  {path: 'doogly/proStory', component: StoryProComponent},
  {path: 'doogly/inscription/pro', component: SignupProComponent},
  {path: 'doogly/inscription/particulier', component: SigninParComponent},
  {path: 'doogly/connexion', component: SigninProComponent},
  {path:'**', component: NotexistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
