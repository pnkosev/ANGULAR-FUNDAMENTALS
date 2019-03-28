import { AppCommonModule } from './components/common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MoviesResolver } from './services/resolvers/movies.resolver';
import { AppMovieModule } from './components/movie/movie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMovieModule,
    AppCommonModule,
  ],
  providers: [
    SingleMovieResolver,
    MoviesResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
