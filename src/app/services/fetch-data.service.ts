import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../models/data.model';
import { Metar } from "../models/metar.model"
import { Station } from "../models/station.model"
import { Taf } from '../models/taf.model';




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

  getMetar(code: String): Observable<any> {
    return this.http.get<any>(this.metarAPI + code + "/decoded", {
      headers: this.httpOptions.headers
    });
  }

  getStation(station: String): Observable<any> {
    return this.http.get<any>(this.stationAPI + station, {
      headers: this.httpOptions.headers
    });
  }

  getTaf(code: String): Observable<any> {
    return this.http.get<any>(this.tafAPI + code, {
      headers: this.httpOptions.headers
    });
  }

}
