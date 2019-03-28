import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchComponent } from './components/movie/movie-search/movie-search.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { MoviesComponent } from './components/movie/movies/movies.component';

import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MoviesResolver } from './services/resolvers/movies.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MoviesComponent,
    resolve: {
      movies: MoviesResolver
    }
  },
  {
    path: 'movie/search',
    component: MovieSearchComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: {
      singleMovie: SingleMovieResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
