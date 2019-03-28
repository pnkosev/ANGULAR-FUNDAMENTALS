import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Movie from '../interfaces/Movie';
import MovieDetails from '../interfaces/MovieDetails';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '3b6a01ac4af610c90da13a6b9065cb60';
const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const inTheaterMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&with_release_type=2|3`;
const kidMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
const dramaMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>(popularMoviesUrl)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map((data) => data['results'].slice(0, 6))
      );
  }

  getInTheaters(): Observable<Movie[]> {
    return this.http.get<Movie[]>(inTheaterMoviesUrl)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map((data) => data['results'].slice(0, 6))
      );
  }

  getKid(): Observable<Movie[]> {
    return this.http.get<Movie[]>(kidMoviesUrl)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map((data) => data['results'].slice(0, 6))
      );
  }

  getDrama(): Observable<Movie[]> {
    return this.http.get<Movie[]>(dramaMoviesUrl)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map((data) => data['results'].slice(0, 6))
      );
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`);
  }

  searchMovies(query: string) {
    return this.http.get<Movie[]>(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`)
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map((data) => data['results'])
      );
  }
}
