import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        FooterComponent,
        LandingComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    exports: [
        FooterComponent,
        LandingComponent,
        NavbarComponent
    ]
})
export class AppCommonModule { }
