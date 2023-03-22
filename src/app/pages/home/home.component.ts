import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:MovieApiServiceService){}

bannerResult:any=[];
trendingMovieResult:any=[];
actionMovieResult:any=[];
adventureMovieResult:any=[];
animationMovieResult:any=[];
comedyMovieResult:any=[];
documentaryMovieResult:any=[];
sciencefictionMovieResult:any=[];
thrillerMovieResult:any=[]

  ngOnInit():void{
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();    
  }

  //bannerdata

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult=result.results

    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult=result.results
    })
  }

  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
console.log(result,'actionmovie#');
this.actionMovieResult=result.results;

    })
  }

  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
console.log(result,'adventuremovie#');
this.adventureMovieResult=result.results;

    })
  }

  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
console.log(result,'animationmovie#');
this.animationMovieResult=result.results;

    })
  }

  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
console.log(result,'comedymovie#');
this.comedyMovieResult=result.results;

    })
  }
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
console.log(result,'movie#documentary');
this.documentaryMovieResult=result.results;

    })
  }

  sciencefictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
console.log(result,'sciencefictionmovie#');
this.sciencefictionMovieResult=result.results;

    })
  }

  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
console.log(result,'thrillermovie#');
this.thrillerMovieResult=result.results;

    })
  }
}
