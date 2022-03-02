import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Data } from 'src/app/models/data.model';
import { Metar } from 'src/app/models/metar.model';
import { Station } from 'src/app/models/station.model';
import { Taf } from 'src/app/models/taf.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultPageComponent implements OnInit, OnChanges {

  @Input()
  queryIn?: string;

  query: string = "";

  $dati? = new Observable<any>();

  metar_stat = false;
  station_stat = false;
  taf_stat = false;
  fire_stat = true;


  metar?: Metar[] = []
  station?: Station[] = []
  taf?: Taf[] = []

  data = new Data()


  
  constructor(private APIService: FetchDataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (!changes['queryIn'].firstChange) {
      
      if (changes['queryIn'].currentValue.length == 4) {
        this.metar = [];
        this.station = [];
        this.taf = [];

        console.log(changes['queryIn'].currentValue);
        this.query = changes['queryIn'].currentValue
        // const met = this.searchMetar(changes['queryIn'].currentValue)
        // const sta = this.searchStation(changes['queryIn'].currentValue)
        // const taf = this.searchTaf(changes['queryIn'].currentValue)

        // GET METAR
        this.APIService.getMetar(this.query).subscribe(item =>{
          // console.log("ITEM");
          // console.log(item);
          item.data.forEach((item: any) => {
            console.log(item);
            this.metar?.push(item);
          })
          
          this.metar_stat = true;
        });

        // GET STATION
        this.APIService.getStation(this.query).subscribe(item =>{
          item.data.forEach((item: any) => {
            console.log(item);
            this.station?.push(item);
          })
          
          this.station_stat = true;
        });

        // GET TAF
        this.APIService.getTaf(this.query).subscribe(item =>{
          item.data.forEach((item: any) => {
            console.log(item);
            this.taf?.push(item);
          })
          
          this.taf_stat = true;
        });
      }
      
    }
  }

  ngOnInit(): void {

  }

  // searchMetar(query: string): Array<Metar> {
  //   console.log("searchMetar() -> " + query);
  //   let met = Array<Metar>();

  //   this.$dati = this.APIService.getMetar(query);

  //   this.$dati.forEach(data => {
  //     // console.log(data.data);
      
  //     this.$metar = data.data;

  //     // met = this.data.setMetar(data.data)
  //     // console.log(met);
  //   })
  //   console.log(this.$metar);
    
  //   return met
  // }

  // searchStation(query: string): Array<Station> {
  //   console.log("searchStation() -> " + query);
  //   let sta = Array<Station>();

  //   this.APIService.getStation(query).forEach((data:any) => {
  //     this.$station?.push(data.data)

  //     // sta = this.data.setStation(data.data)
  //     // console.log(sta);
      
  //   })
  //   console.log(this.$station);
  //   return sta
  // }

  // searchTaf(query: string): Array<Taf> {
  //   console.log("searchTaf() -> " + query);
  //   let taf = Array<Taf>();

  //   this.APIService.getTaf(query).forEach((data:any) => {
  //     this.$taf?.push(data.data)

  //     // taf = this.data.setTaf(data.data)
  //     // console.log(data.data);
  //   })
  //   console.log(this.$taf);
  //   return taf
  // }

}
