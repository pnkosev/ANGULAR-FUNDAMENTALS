import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieDetails from '../../../interfaces/MovieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;
  movieGenres: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.movie = this.route.snapshot.data['singleMovie'];
    // tslint:disable-next-line: no-string-literal
    this.movieGenres = this.movie.genres.map(g => g['name']).join(' ');
  }

}
