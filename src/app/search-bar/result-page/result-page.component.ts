import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar } from 'src/app/models/metar.model';
import { Station } from 'src/app/models/station.model';
import { Taf } from 'src/app/models/taf.model';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, OnChanges {

  @Input() metar_tmp?: Observable<Metar>;
  @Input() station_tmp?: Observable<Station>;
  @Input() taf_tmp?: Observable<Taf>;

  @Input() data?: any[];

  $metar? = new Array<any>();
  $station? = new Array<any>();
  $taf? = new Array<any>();

  metar_stat = false;
  station_stat = false;
  taf_stat = false;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {   

    // - TODO: FIX porting dati in unico elemento 
    // (Creiamo un modulo apposta per portarci dietro i dati.)


    if (!changes['data'].firstChange) {
      //this.$metar?.push(this.data?[0]);


    }

    // console.log("METAR");
    // console.log(this.metar_tmp);

    // console.log("STATION");
    // console.log(this.station_tmp);

    // console.log("TAF");
    // console.log(this.taf_tmp);
    
    // // console.log(this.metar_stat);
    // // console.log(this.station_stat);
    // // console.log(this.taf_stat);
    
    // // ALL
    // // console.log("Change METAR -> " + changes['metar_tmp'].firstChange);
    // // console.log("Change STATION -> " + changes['station_tmp'].firstChange);
    // // console.log("Change TAF -> " + changes['taf_tmp'].firstChange);

    // if (!changes['metar_tmp'].firstChange || !changes['metar_tmp'].firstChange || !changes['taf_tmp'].firstChange) {
    //   // this.metar = changes['metar'].currentValue
    //   changes['metar_tmp'].currentValue.forEach((item: any) => {
    //     this.$metar?.push(item)
    //   });
    //   changes['station_tmp'].currentValue.forEach((item: any) => {
    //     this.$station?.push(item)
    //   });
    //   changes['taf_tmp'].currentValue.forEach((item: any) => {
    //     this.$taf?.push(item)
    //   });
    //   this.metar_stat = true;
    //   this.station_stat = true;
    //   this.taf_stat = true;
    //}

    /*
    //-----------------------------------------------------------------
    // METAR
    console.log("Change METAR -> " + changes['metar_tmp'].firstChange);
    if (!changes['metar_tmp'].firstChange) {
      // this.metar = changes['metar'].currentValue
      changes['metar_tmp'].currentValue.forEach((item: any) => {
        this.$metar?.push(item)
      });
      this.metar_stat = true;
    }

    // STATION
    console.log("Change STATION -> " + changes['station_tmp'].firstChange);
    if (!changes['station_tmp'].firstChange) {
      // this.metar = changes['metar'].currentValue
      changes['station_tmp'].currentValue.forEach((item: any) => {
        this.$station?.push(item)
      });
      this.station_stat = true;
    }

    // TAF
    console.log("Change TAF -> " + changes['taf_tmp'].firstChange);
    if (!changes['taf_tmp'].firstChange) {
      // this.metar = changes['metar'].currentValue
      changes['taf_tmp'].currentValue.forEach((item: any) => {
        this.$taf?.push(item)
      });
      this.taf_stat = true;
    }*/
  }

  ngOnInit(): void {

  }

}
