import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { AdminGuard } from '../authentication/guards/admin.guard';
import { FurnitureResolverService } from './furniture-resolver.service';

// Components

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: 'all', component: FurnitureAllComponent },
    { path: 'create', component: CreateFurnitureComponent },
    { path: 'details/:id', component: FurnitureDetailsComponent },
    { path: 'user', component: FurnitureUserComponent },
    {
        path: ':id',
        component: EditFurnitureComponent,
        resolve: { editFurniture: FurnitureResolverService },
        canActivate: [AdminGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FurnitureRoutingModule { }
