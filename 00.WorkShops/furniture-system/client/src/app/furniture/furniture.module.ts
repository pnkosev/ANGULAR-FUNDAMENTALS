import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FurnitureRoutingModule } from './furniture-routing.module';

import { FurnitureResolverService } from './furniture-resolver.service';

import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';

@NgModule({
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    FurnitureAllComponent,
    CreateFurnitureComponent,
    FurnitureDetailsComponent,
    FurnitureUserComponent,
    EditFurnitureComponent
  ],
  providers: [
    FurnitureResolverService
  ]
})
export class FurnitureModule { }
