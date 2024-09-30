import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CategoryBarModule} from "../category-bar/category-bar.module";
import {HomeIntroductionModule} from "../home-introduction/home-introduction.module";
import {DisplayModule} from "../display/display.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoryBarModule,
    HomeIntroductionModule,
    DisplayModule
  ]
})
export class HomeModule { }
