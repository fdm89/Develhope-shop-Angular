import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../card/Mock';
import { Card } from '../card/Card';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
products = PRODUCTS
selectedProduct! : Card | null;
cart: number = 0

constructor() { }

show(product:Card){
  this.selectedProduct = product;
}

close(){
  this.selectedProduct = null
}

addToCart(){
  this.cart += 1
}
  ngOnInit(): void {
  }

}
