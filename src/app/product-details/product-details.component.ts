import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,

    
    ) { 
    
  }

  // addToCart(product){
  //   this.cartService.addToCart(product);
  //   window.alert('your product has been added to cart!');
  // }

  ngOnInit() {
    this.route.paramMap.subscribe (params => {
      this.product = products[+params.get('productId')];
    });
  }

}