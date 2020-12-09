import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
//import { mongoose } from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class ShowProductsService {
  private IsComponentVisible = new BehaviorSubject<boolean>(true);
  currentlyVisible = this.IsComponentVisible.asObservable();

  private _getUrl = "/api/supermarkets";

  constructor(private _http: HttpClient) { }

  changeVisibility(visible:boolean){
    this.IsComponentVisible.next(visible)
  }

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
