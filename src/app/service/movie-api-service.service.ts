import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  api_token = "6a99c14b767fa1380fe1cfd1ad04bbe8";
 
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.api_token}`);
  }


  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.api_token}&query=${data.movieName}`);
  }


  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.api_token}`)
  }

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.api_token}`);
  }



  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.api_token}&with_genres=99`);
  }

}
