import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import Movie from '../../interfaces/Movie';
import { MovieService } from '../movie.service';

@Injectable()
export class MoviesResolver implements Resolve<any> {
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return forkJoin(
            this.movieService.getPopular(),
            this.movieService.getInTheaters(),
            this.movieService.getKid(),
            this.movieService.getDrama()
        );
    }
}
