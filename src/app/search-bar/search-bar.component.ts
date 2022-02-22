import { Component, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar, Station } from '../models/metar.model';
import { Taf } from '../models/taf.model';
import { FetchDataService } from '../services/fetch-data.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit {
  query : string = "";

  parentMessage = this.query

  metar? = new Observable<Metar>();
  station? = new Observable<Station>();
  taf? = new Observable<Taf>();


  constructor(private APIService: FetchDataService, private ShareData: ShareDataService) { }

  ngOnInit(): void {
  }

  searchMetar(){
    console.log(this.query);
    this.APIService.getMetar(this.query).subscribe(data => {
      this.ShareData.setMetar(data.data)
      this.metar = data.data

      // data.data.forEach((item: any) => {        
      //   this.metar?.push(item)
      // });
      // console.log("DATA: " + data.data);
      //this.parentMessage = this.query
    })
  }
  searchStation(){
    console.log(this.query);
    this.APIService.getStation(this.query).subscribe(data => {
      this.ShareData.setStation(data.data)
      this.station = data.data
    })
  }
  searchTaf(){
    console.log(this.query);
    this.APIService.getTaf(this.query).subscribe(data => {
      this.ShareData.setTaf(data.data)
      this.taf = data.data
    })
  }
}
