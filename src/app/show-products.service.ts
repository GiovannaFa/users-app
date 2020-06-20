import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { mongoose } from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class ShowProductsService {

  //declare ShowProductsService class
  private _getUrl = "/api/supermarkets";

  constructor(private _http: HttpClient) { }
  //method that actually get the data from the database
  getSupermarkets(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response);
  }

  getProducts(id: string){
      return this._http.get(`${this._getUrl}/${id}`)
      .map((response: Response) => response);
    }
}
