import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { map, Observable} from 'rxjs';
import { Data } from 'src/app/models/data.model';
import { Metar } from 'src/app/models/metar.model';
import { Station } from 'src/app/models/station.model';
import { Taf } from 'src/app/models/taf.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
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
  fire_stat = false;


  metar?: Metar[] = []
  station?: Station[] = []
  taf?: Taf[] = []

  data = new Data()

  stationRemoteCollection: Station[] | any[] = [];
  stat: any;


  
  constructor(private APIService: FetchDataService, private FireService: FirebaseDataService) { 

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.metar_stat = false;
    this.station_stat = false;
    this.taf_stat = false;
    this.fire_stat = false;
    
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

}
