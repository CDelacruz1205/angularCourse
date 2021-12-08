import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  public existo = false;
  public contador = 0;

  changeExist() {
    this.contador += 1;
    console.log(this.contador/2);
    if(this.contador/2 === 0) {
      this.existo = true
    } else {
      this.existo = false
    }
  }
}
