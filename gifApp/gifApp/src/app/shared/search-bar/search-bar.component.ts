import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }

  buscar(term:string){
    const val = this.txtBuscar.nativeElement.value;

    if(val.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(val);

    this.txtBuscar.nativeElement.value = '';
  }
}
