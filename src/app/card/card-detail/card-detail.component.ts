import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
@Input() product!:Card
@Output() closeDetail = new EventEmitter()
@Output() add = new EventEmitter()

  constructor() { }



  ngOnInit(): void {
  }

}
