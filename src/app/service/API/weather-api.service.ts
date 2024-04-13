import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private URL='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

  constructor(private http: HttpClient) { }


  getNext15DaysLocation(location: string){

    const headers = this.addCoustomHeader('Wheatherapi','true',new HttpHeaders());
    return this.http.get(this.URL+location, {headers});
  }

  getDayFromXtoY(location: string, start: string, end: string){

    const headers = this.addCoustomHeader('Wheatherapi','true',new HttpHeaders());
    return this.http.get(`${this.URL}${location}/${start}/${end}`, {headers});

  }

  getFromCoordinate(location: string, latitudine: string, longitudine: string){
    const headers = this.addCoustomHeader('Wheatherapi','true',new HttpHeaders());
    return this.http.get(`${this.URL}${location}/${latitudine},${longitudine}`, {headers});
  }

  private addCoustomHeader(header: myHeader,value: string ,oldHeaders: HttpHeaders){
    const newHeaders = oldHeaders
      .set(header, value);
    return newHeaders;
  }

}

export type myHeader = 'Wheatherapi'
