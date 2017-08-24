import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'mvat-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('opacar', [
      state('inactivo', style({
        opacity: '0',
      })),
      state('activo', style({
        opacity: '1',
      })),
      transition('inactivo => activo', animate('600ms ease-in')),
      transition('activo => inactivo', animate('600ms ease-out')),
    ]),
    trigger('transladaXT', [
      state('inactivo', style({
        transform: 'scale(0.7)',
        top: '148px',
        left: '-12px',
      })),
      state('activo', style({
        transform: 'scale(1)',
        top: '12px',
        left: '12px'
      })),
      transition('inactivo => activo', animate('600ms ease-in')),
      transition('activo => inactivo', animate('600ms ease-out')),
    ]),
    trigger('transladaXC', [
      state('inactivo', style({
        height: '25%',
        top: '74%',
      })),
      state('activo', style({
        height: '100%',
        top: '0%',
      })),
      transition('inactivo => activo', animate('600ms ease-in')),
      transition('activo => inactivo', animate('600ms ease-out')),
    ])
  ],
})
export class CardsComponent implements OnInit {
  opacar: string;
  transladaXT: string;
  transladaXC: string;
  constructor() {
    this.transladaXT = 'activo';
    this.transladaXC = 'activo';
    this.opacar = 'activo';
   }

   transladaXc(): void {
    if (this.transladaXC === 'activo') {
      this.transladaXC = 'inactivo';
    } else {
      this.transladaXC = 'activo'
    }
  }
   transladaX(): void {
    if (this.transladaXT === 'activo') {
      this.transladaXT = 'inactivo';
    } else {
      this.transladaXT = 'activo'
    }
  }
  opaca(): void {
    if (this.opacar === 'activo') {
      this.opacar = 'inactivo';
    } else {
      this.opacar = 'activo'
    }
  }
  ngOnInit() {
  }

}
