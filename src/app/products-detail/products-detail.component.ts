import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
  inputs: ['result']
})
export class ProductsDetailComponent implements OnInit {

  result: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
