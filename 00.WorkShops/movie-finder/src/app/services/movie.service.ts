import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Movie from '../interfaces/Movie';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '3b6a01ac4af610c90da13a6b9065cb60';
const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const inTheaterMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&with_release_type=2|3`;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(popularMoviesUrl);
  }

  getInTheaters(): Observable<Movie[]> {
    return this.http.get<Movie[]>(inTheaterMoviesUrl);
  }
}
