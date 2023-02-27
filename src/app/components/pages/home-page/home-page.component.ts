import { Component, OnInit } from '@angular/core';
import { Movies } from '../../classes/movies';
import { MoviesService } from '../../services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  actionMovies: Movies[] = [];
  topRatedMovies: Movies[] = [];
  trendingMovies: Movies[] = [];

  constructor(public moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getActionMovies();
    this.getTopRatedMovies();
    this.getTrendingMovies();
  }

  getActionMovies() {
    this.moviesService.fetchActionMovies().subscribe((response) => {
      this.actionMovies = response.results;
    });
  }
  getTopRatedMovies() {
    this.moviesService.fetchTopRatedMovies().subscribe((response) => {
      this.topRatedMovies = response.results;
    });
  }
  getTrendingMovies() {
    this.moviesService.fetchTrendingMovies().subscribe((response) => {
      this.trendingMovies = response.results;
    });
  }
}
