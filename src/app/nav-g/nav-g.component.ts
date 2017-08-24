import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'mvat-nav-g',
  templateUrl: './nav-g.component.html',
  styleUrls: ['./nav-g.component.css'],
  animations: [
    trigger('animacion', [
      state('inactivo', style({
        backgroundColor: '#03a0ff',
        width: '0',
        opacity: '0'
      })),
      state('activo', style({
        width: '*',
      })),
      transition('inactivo => activo', animate('100ms ease-in')),
      transition('activo => inactivo', animate('100ms ease-in')),
    ])
  ],
})
export class NavGComponent implements OnInit {
  estado = 'inactivo';

  constructor() {

  }
  ngOnInit() {
  }



}
