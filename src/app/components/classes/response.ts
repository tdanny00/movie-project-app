import { Movies } from './movies';

export interface Response {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
}
