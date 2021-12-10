import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SearchBarComponent,
  ],
  exports: [
    SidebarComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
