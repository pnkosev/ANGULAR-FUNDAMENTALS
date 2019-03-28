import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Movie from '../../../interfaces/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movie[];
  inTheater: Movie[];
  kid: Movie[];
  drama: Movie[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const [popular, inTheater, kid, drama] = this.route.snapshot.data['movies'];
    this.popular = popular;
    this.inTheater = inTheater;
    this.kid = kid;
    this.drama = drama;
  }

  receiveEvent(event): void {
    console.log(event);
  }
}
