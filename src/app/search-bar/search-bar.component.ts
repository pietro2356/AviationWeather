import { Component, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar } from 'src/app/models/metar.model';
import { Station } from 'src/app/models/station.model';
import { Taf } from 'src/app/models/taf.model';
import { Data } from '../models/data.model';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit {
  query : string = "";

  // metar? = new Observable<Metar>();
  // station? = new Observable<Station>();
  // taf? = new Observable<Taf>();

  data? = new Data();


  constructor() { }

  ngOnInit(): void {
  }

  search(){
    
  }

  
}
