import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar, Station } from '../models/metar.model';
import { Taf } from '../models/taf.model';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit {
  query : String = "";
  $metar? = new Observable<Metar>();
  $station? = new Observable<Station>();
  $taf? = new Observable<Taf>();


  constructor(private APIService: FetchDataService) { }

  ngOnInit(): void {
  }

  searchMetar(){
    console.log(this.query);
    this.APIService.getMetar(this.query).subscribe(data => {
      this.$metar = data.data;
      console.log(this.$metar);
    })
  }
  searchStation(){
    console.log(this.query);
    this.APIService.getStation(this.query).subscribe(data => {
      this.$station = data.data;
      console.log(this.$station);
    })
  }
  searchTaf(){
    console.log(this.query);
    this.APIService.getTaf(this.query).subscribe(data => {
      this.$taf = data.data;
      console.log(this.$taf);
    })
  }
}
