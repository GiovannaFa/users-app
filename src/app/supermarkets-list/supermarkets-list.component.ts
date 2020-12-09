/* import { Component, OnInit, EventEmitter } from '@angular/core';
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
} */
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Product } from '../product';
import { User } from '../user';
import * as L from 'leaflet';
import { ShowProductsService } from '../show-products.service';
@Component({
  selector: 'supermarkets-list',
  templateUrl: './supermarkets-list.component.html',
  styleUrls: ['./supermarkets-list.component.css'],
  //inputs: ['supermarkets'],
  outputs: ['SelectSupermarket']
})
export class SupermarketsListComponent implements OnInit {
  visible:boolean;
  @Input() supermarkets: Array<User>;
  //supermarkets: Array<User>;
  map;

  test_superms=[
    {
      "_id" : Object("5f57aa32425de8b8a11ced02"),
      "name" : "bio c' bon",
      "email" : "biocbon@mail.com",
      "adress" : "paseo de la castellana, 18, Madrid",
      "password" : "$2a$10$3FPPL46LsNJjM98ekLBDMe09tCcPbehTtq6l1lFpWLnyhPIAJi6Wy",
      "date" : Date(),
      "__v" : 0,
      "lat" : 40.42875,
      "lng" : -3.689
    },
    {
      "_id" : Object("5f58e815425de8b8a11ced07"),
      "name" : "Carrefour",
      "email" : "carrefour@mail.com",
      "adress" : "calle Palencia 7, Madrid",
      "password" : "$2a$10$kMeZcuHHL0zbApmsEMgp7O7zg1eUeOia/5A1eSCD9W6bRlBHixWzK",
      "date" : Date(),
      "__v" : 0,
      "lat" : 40.419041,
      "lng" : -3.83416
    },
    {
      "_id" : Object("5f6609ce05042056bc9992ab"),
      "name" : "Dia",
      "email" : "dia@mail.com",
      "adress" : "Calle Palencia 21, Madrid",
      "password" : "$2a$10$x9eP7cHojd4IT7yj2k/3ue4Zneqhwj7PaGG.GWaav2tjkL2Ge2.s2",
      "date" : Date(),
      "__v" : 0,
      "lat" : 40.417430,
      "lng" : -3.836660
    }
  ]

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  public SelectSupermarket = new EventEmitter();

  constructor(private _showProductsService: ShowProductsService) {
  }

  ngOnInit(): void {
    this.createMap();
    this._showProductsService.currentlyVisible.subscribe(visible => this.visible = visible)
  }

  createMap() {
    const zoomLevel = 12;
    this.map = L.map('map', {
      center: [40.416775, -3.703790],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    this.addMarker(this.test_superms);
  }

  newVisibility(){
    this._showProductsService.changeVisibility(true)
  }

  onSelect(superm: any){
    this.newVisibility();
    this.SelectSupermarket.emit(superm);
  }

  addMarker(supermarkets) {
    for (let _json in supermarkets) {
        const marker = L.marker([supermarkets[_json].lat, supermarkets[_json].lng], { icon: this.smallIcon }).on('click', (clickEvent) => this.onSelect(supermarkets[_json]))
        .bindPopup(supermarkets[_json].name + '</br>' + supermarkets[_json].adress)
        .addTo(this.map);
    }
  }
}
