import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = 'My task';

  constructor() { }

  ngOnInit(): void {
  }

  // inputHandler(event: any) {
  //   const value = event.target.value;
  //   this.title = value;
  // }

  inputHandler(value: any) {
   
    this.title = value;
  }
}
