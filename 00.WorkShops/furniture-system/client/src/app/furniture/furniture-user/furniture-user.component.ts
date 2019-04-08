import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';

import { FurnitureService } from '../furniture.service';

import { Furniture } from '../models/furniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  furnitures$: Observable<Furniture[]>;

  constructor(
    private furnitureService: FurnitureService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.furnitures$ = this.furnitureService.getMyFurniture();
  }

  deleteFurniture(id: string) {
    this.furnitureService.deleteFurniture(id).subscribe(_ => {
      this.getData();
      // this.furnitures$.filter(f => f._id !== id)
    });
  }

}
