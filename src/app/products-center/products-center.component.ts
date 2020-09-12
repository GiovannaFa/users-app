import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ShowProductsService } from '../show-products.service';
import { User } from '../user';

@Component({
  selector: 'app-products-center',
  templateUrl: './products-center.component.html',
  styleUrls: ['./products-center.component.css'],
  providers: [ShowProductsService]
})
export class ProductsCenterComponent implements OnInit {
  isComponentVisible:boolean = true;
  super_id: string;
  supermarkets: any;

  selectedSupermarket: any =[];

  constructor(private _showProductsService: ShowProductsService) { }

  //subcription to the show-product service
  ngOnInit(): void {
    this._showProductsService.getSupermarkets()
      .subscribe(resSupermarkets => {
        return this.supermarkets = resSupermarkets;
      });
  }

  onSelectSupermarket(supermarket: User){
    this.super_id = supermarket._id
    this._showProductsService.getProducts(this.super_id)
    .subscribe(resProducts => this.selectedSupermarket = resProducts);
  }
}
