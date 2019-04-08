import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FurnitureService } from '../furniture.service';

import { Furniture } from './../models/furniture';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture$: Observable<Furniture>;

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.furniture$ = this.furnitureService.getFurnitureDetails(id);
  }

}
