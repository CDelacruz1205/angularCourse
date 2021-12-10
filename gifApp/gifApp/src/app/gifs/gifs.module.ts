import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifPageComponent,
    ResultsComponent
  ],
  exports: [
    GifPageComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
