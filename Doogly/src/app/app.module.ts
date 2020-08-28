
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotexistComponent } from './notexist/notexist.component';
import { ProPageComponent } from './pro-page/pro-page.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './auth/auth.component';
import { DashboardProComponent } from './dashboard-pro/dashboard-pro.component';
import { StoryProComponent } from './story-pro/story-pro.component';
import { DashboardPersoComponent } from './dashboard-perso/dashboard-perso.component';
import { SignupProComponent } from './signup-pro/signup-pro.component';
import { SignupParComponent } from './signup-par/signup-par.component';
import { SigninParComponent } from './signin-par/signin-par.component';
import { SigninProComponent } from './signin-pro/signin-pro.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    NotexistComponent,
    ProPageComponent,
    HomeComponent,
    AuthComponent,
    DashboardProComponent,
    StoryProComponent,
    DashboardPersoComponent,
    SignupProComponent,
    SignupParComponent,
    SigninParComponent,
    SigninProComponent,
    PopupComponent,

  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCU8tzato6fdeLvs_c2MzYCsRaS5gmhOT0',
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    MaterialModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
