import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ base }}</h2>

    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ cont }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  // Attributes
  public title: string = 'Contador';
  public cont: number = 0;
  public base: number = 5;

  // Methods
  acumular (val: number) {
    this.cont += val;
  };
}
