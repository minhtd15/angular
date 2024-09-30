// src/app/menu-bar/menu-bar.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [] // Xuất MenuBarComponent để sử dụng ngoài module này
})
export class MenuBarModule { }
