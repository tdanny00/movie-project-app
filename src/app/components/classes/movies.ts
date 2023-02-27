export interface Movies {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  original_name: string;
  genre_ids: number[];
  id: number;
  imdb_id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  name: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
  runtime: number;
  total_results: number;
  total_pages: number;
}
