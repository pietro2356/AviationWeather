import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Metar } from "../models/metar.model"




@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  metarAPI = "https://api.checkwx.com/metar/";
  stationAPI = "https://api.checkwx.com/station/";
  tafAPI = "https://api.checkwx.com/taf/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.weatherAPI.apiKey
    })
  }



  constructor(public http: HttpClient) { }

  getMetar(code: String): Observable<Metar[]> {
    return this.http.get<Metar[]>(this.metarAPI + code + "/decoded", {
      headers: this.httpOptions.headers
    });
  }

  getStation(station: String): Observable<any> {
    return this.http.get(this.stationAPI + station, {
      headers: this.httpOptions.headers
    });
  }

  getTaf(code: String): Observable<any> {
    return this.http.get(this.tafAPI + code, {
      headers: this.httpOptions.headers
    });
  }

}
