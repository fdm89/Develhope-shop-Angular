import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../Card';
import { PRODUCTS } from '../Mock';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
@Input() products!:Card[];
@Output() showdetail = new EventEmitter <Card>();


  constructor() { }



  ngOnInit(): void {
  }

}
