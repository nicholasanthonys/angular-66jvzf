import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  proudct;
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe (params => {
      this.proudct = products[+params.get('productId')];
    });
  }

}