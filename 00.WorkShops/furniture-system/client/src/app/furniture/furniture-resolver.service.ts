import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { FurnitureService } from './furniture.service';
import { Furniture } from './models/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureResolverService implements Resolve<Furniture> {

  constructor(
    private furnitureService: FurnitureService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return this.furnitureService.getFurnitureDetails(id);
  }
}
