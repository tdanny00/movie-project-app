import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../classes/response';
import { Movies } from '../classes/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  API_KEY = 'c1513c72eb2b00a10755c8ff8b76d349';
  Url = 'https://api.themoviedb.org/3';
  series_types = {
    popular: `/tv/popular?api_key=${this.API_KEY}`,
    top_rated: `/tv/top_rated?api_key=${this.API_KEY}`,
  };
  requests = {
    fetchTrending: `/trending/all/week?api_key=${this.API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${this.API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${this.API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${this.API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${this.API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${this.API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${this.API_KEY}&with_genres=10749`,
    fetchDocumantaries: `/discover/movie?api_key=${this.API_KEY}&with_genres=99`,
  };

  fetchActionMovies(): Observable<Response> {
    return this.http.get<Response>(this.Url + this.requests.fetchActionMovies);
  }

  fetchTopRatedMovies(): Observable<Response> {
    return this.http.get<Response>(this.Url + this.requests.fetchTopRated);
  }

  fetchTrendingMovies(): Observable<Response> {
    return this.http.get<Response>(this.Url + this.requests.fetchTrending);
  }

  fetchNetflixOriginals(): Observable<Response> {
    return this.http.get<Response>(
      this.Url + this.requests.fetchNetflixOriginals
    );
  }

  searchMovie(searchQuery: string, page: number): Observable<Response> {
    return this.http.get<Response>(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${searchQuery}&page=${page}`
    );
  }

  getSeriesPopular(): Observable<Response> {
    return this.http.get<Response>(this.Url + this.series_types.popular);
  }

  getSeriesTopRated(): Observable<Response> {
    return this.http.get<Response>(this.Url + this.series_types.top_rated);
  }

  getAll(): Observable<Response> {
    return this.http.get<Response>(this.Url + this.requests.fetchHorrorMovies);
  }

  getMoreDetails(movieId: number): Observable<Movies> {
    return this.http.get<Movies>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.API_KEY}`
    );
  }
}
