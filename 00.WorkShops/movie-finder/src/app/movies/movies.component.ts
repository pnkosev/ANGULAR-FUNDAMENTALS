import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';
import Movie from '../interfaces/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movie[];
  inTheater: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopular()
      .subscribe(data => {
        // tslint:disable-next-line: no-string-literal
        this.popular = data['results'].slice(0, 6);
      });

    this.movieService.getInTheaters()
      .subscribe(data => {
        // tslint:disable-next-line: no-string-literal
        this.inTheater = data['results'].slice(6, 12);
      });
  }

  logMovieReceiver(event): void {
    console.log(event);
  }

}
