import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { FurnitureService } from './../furniture.service';
import { AuthService } from './../../authentication/auth.service';

import { Furniture } from './../models/furniture';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furnitures$: Observable<Furniture[]>;

  constructor(
    public authService: AuthService,
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.furnitures$ = this.furnitureService.getAllFurniture();
  }

  deleteFurniture(id: string) {
    this.furnitureService.deleteFurniture(id).subscribe(_ => this.getData());
  }

}
