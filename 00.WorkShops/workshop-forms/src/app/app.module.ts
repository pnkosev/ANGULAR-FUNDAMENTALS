import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterFormTDComponent } from './register-form-td/register-form-td.component';
import { RegisterFormReactiveComponent } from './register-form-reactive/register-form-reactive.component';
import { ImageUrlValidatorDirective } from './register-form-td/image-url-validator-td.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormTDComponent,
    ImageUrlValidatorDirective,
    RegisterFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
