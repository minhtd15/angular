import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MenuBarModule} from "./menu-bar/menu-bar.module";
import {CategoryBarModule} from "./category-bar/category-bar.module";
import {HomeComponent} from "./home/home.component";
import {HomeIntroductionModule} from "./home-introduction/home-introduction.module";
import {HomeIntroductionComponent} from "./home-introduction/home-introduction.component";
import {NgOptimizedImage} from "@angular/common";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {CategoryBarComponent} from "./category-bar/category-bar.component";
import {MenuBarComponent} from "./menu-bar/menu-bar.component";
import {DisplayModule} from "./display/display.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CategoryBarComponent,
    MenuBarComponent, HomeComponent
  ],

  bootstrap: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    CategoryBarModule,
    HomeIntroductionComponent,
    DisplayModule,
    FormsModule
    , BrowserAnimationsModule, MenuBarModule, HomeIntroductionModule, NgOptimizedImage],
  exports: [
    HomeIntroductionComponent
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()]
})
export class AppModule {
}

