// src/app/dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuBarModule } from '../menu-bar/menu-bar.module'; // Import MenuBarModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MenuBarModule // Thêm MenuBarModule vào imports thay vì MenuBarComponent
  ]
})
export class DashboardModule { }
