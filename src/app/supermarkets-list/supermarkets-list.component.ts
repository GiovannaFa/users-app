import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'supermarkets-list',
  templateUrl: './supermarkets-list.component.html',
  styleUrls: ['./supermarkets-list.component.css'],
  inputs: ['supermarkets'],
  outputs: ['SelectSupermarket']
})
export class SupermarketsListComponent implements OnInit {
  supermarkets: Array<User>;

  public SelectSupermarket = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(superm: User){
    this.SelectSupermarket.emit(superm);
  }


}
