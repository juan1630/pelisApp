import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';


const URL = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})

  export class MoviesService {


  constructor(  private http: HttpClient  ) { }


  private ejecutarQuery<T>( query: string  ) {
      query = URL +  query;

      query += `&api_key=${apiKey}&language=es&include_image_language=es`;

      return this.http.get<T>(query);
  }

  getFeacture() {

    const hoy = new Date();
    const ultimoDia  = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1; 
    let mesString;


    if( mes < 10 ) {

      mesString = '0'+mes;

    }else {

      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear()}-${mesString}-01`;
    const fin = `${ hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    // return this.http.get<RespuestaMDB>(`${}`);
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);

  }


}