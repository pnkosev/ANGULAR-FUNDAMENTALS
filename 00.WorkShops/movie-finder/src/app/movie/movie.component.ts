import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Movie from '../interfaces/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: Movie;
  @Output()
  logMovieIdEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logMovieId(): void {
    console.log(this.movie.id);
    this.logMovieIdEmitter.emit(this.movie.id);
  }
}
