import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ShowProductsService } from '../show-products.service';
import { User } from '../user';

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
  inputs: ['result']
})
export class ProductsDetailComponent implements OnInit {
  visible:boolean;

  result: any[];

  constructor(private _showProductsService: ShowProductsService) { }

  ngOnInit(): void {
    this._showProductsService.currentlyVisible.subscribe(visible => this.visible = visible)
  }

  newVisibility(){
    this._showProductsService.changeVisibility(false)
  }

  refresh(): void {
    window.location.reload();
}

}
