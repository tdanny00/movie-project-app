import { Component, OnInit } from '@angular/core';
import { Movies } from '../../classes/movies';
import { MoviesService } from '../../services/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  netflixOriginals: Movies[] = [];
  backDropPath: string = '/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg';
  randomNumber: number = 1;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getRandomArbitrary();

    this.getNetflixOriginals();

    this.getBackDropPath();
  }

  getNetflixOriginals() {
    this.moviesService.fetchNetflixOriginals().subscribe((response) => {
      console.log(response.results);
      this.netflixOriginals = response.results;
    });
  }

  getBackDropPath() {
    this.netflixOriginals.forEach((obj) => {
      this.backDropPath = obj.backdrop_path;
    });
  }

  getRandomArbitrary() {
    return (this.randomNumber = Math.floor(Math.random() * (20 - 1) + 1));
  }
}
