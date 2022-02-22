import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar, Station } from '../models/metar.model';
import { Taf } from '../models/taf.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  $metar? = new Observable<Metar>();
  $station? = new Observable<Station>();
  $taf? = new Observable<Taf>();

  constructor() { }

  setMetar(metar: Observable<Metar>){
    this.$metar = metar;
  }
  setStation(station: Observable<Station>){
    this.$station = station;
  }
  setTaf(taf: Observable<Taf>){
    this.$taf = taf;
  }

  getMetar(){
    return this.$metar;
  }
  getStation(){
    return this.$station;
  }
  getTaf(){
    return this.$taf;
  }
}
