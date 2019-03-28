import { MovieService } from '../movie.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import MovieDetails from '../../interfaces/MovieDetails';

@Injectable()
export class SingleMovieResolver implements Resolve<MovieDetails> {
    constructor(
        private movieService: MovieService,
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // tslint:disable-next-line: no-string-literal
        const id = route.params['id'];
        return this.movieService.getMovieDetails(id);
    }
}
