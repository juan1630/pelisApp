import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(  private http: HttpClient  ) { }



  getFeacture() {

    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2020-10-31&api_key=f7318215449432d83fd707dce125fe31&language=es&include_image_language=es`);

  }


}
