import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../../services/movie.service';
import Movie from '../../../interfaces/Movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies: Movie[];
  query: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(query => {
      // tslint:disable-next-line: no-string-literal
      this.search(query['search']);
    });
  }

  search(query: string): void {
    this.movieService.searchMovies(query)
      .subscribe(data => this.searchedMovies = data);
  }
}
