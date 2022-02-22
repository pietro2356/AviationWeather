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

  state: boolean = false;

  constructor() { }

  setMetar(metar: Observable<Metar>){
    this.$metar = metar;
    this.state = true;
    // console.log(this.$metar);
    // console.log(this.state);
  }
  setStation(station: Observable<Station>){
    this.$station = station;
    this.state = true;
  }
  setTaf(taf: Observable<Taf>){
    this.$taf = taf;
    this.state = true;
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
