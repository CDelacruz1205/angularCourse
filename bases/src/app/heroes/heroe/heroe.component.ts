import { Component } from '@angular/core';

@Component({
  selector: "app-heroe",
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  // Attributes
  public name: string = "Ironman";
  public age: number = 46;
  public nameChanged:boolean = false;


  // Methods
  getName ():string {
    return `El nombre es ${this.name} y tiene edad ${this.age}`;
  }

  // Getters
  get obtenerNombre(): string {
    return this.name;
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.age += 234;
  }
}
