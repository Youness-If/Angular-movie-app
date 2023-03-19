import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieApi: any;
  actionMovies: any;

  constructor(private service: MovieApiServiceService,private title:Title) {
    this.title.setTitle('Home');
}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.documentaryMovie();

  }
  selectedCategory: string = 'All';




  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      this.selectedCategory = 'Trending';
    });
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
      this.selectedCategory = 'All';
    });
  }


  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
      this.selectedCategory = 'documentary';
    });
  }

  
  
}
