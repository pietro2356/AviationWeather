import { Component, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar } from 'src/app/models/metar.model';
import { Station } from 'src/app/models/station.model';
import { Taf } from 'src/app/models/taf.model';
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

  data?: any[];


  constructor(private APIService: FetchDataService, private ShareData: ShareDataService) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.query);

    this.searchMetar();
    this.searchStation();
    this.searchTaf();

    this.data?.push(this.metar)
    this.data?.push(this.station)
    this.data?.push(this.taf)



    // this.APIService.getMetar(this.query).subscribe(data => {
    //   this.metar = data.data;
    // })
    // this.APIService.getStation(this.query).subscribe(data => {
    //   this.station = data.data;
    // })
    // this.APIService.getTaf(this.query).subscribe(data => {
    //   this.taf = data.data;
    // })

    // console.log(this.metar);
    // console.log(this.station);
    // console.log(this.taf);
    
  }

  searchMetar(){
    console.log("searchMetar() -> " + this.query);
    this.APIService.getMetar(this.query).subscribe(data => {
      this.ShareData.setMetar(data.data)
      this.metar = data.data
    })
    // console.log(this.metar);
    
  }
  searchStation(){
    console.log("searchStation() -> " + this.query);
    this.APIService.getStation(this.query).subscribe(data => {
      this.ShareData.setStation(data.data)
      this.station = data.data
    })
    // console.log(this.station);
  }
  searchTaf(){
    console.log("searchTaf() -> " + this.query);
    this.APIService.getTaf(this.query).subscribe(data => {
      this.ShareData.setTaf(data.data)
      this.taf = data.data
    })
    // console.log(this.taf);
  }
}
