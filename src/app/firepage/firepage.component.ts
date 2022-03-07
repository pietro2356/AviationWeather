import { Component, OnInit } from '@angular/core';
import { Station } from '../models/station.model';
import { FetchDataService } from '../services/fetch-data.service';
import { FirebaseDataService } from '../services/firebase-data.service';

@Component({
  selector: 'app-firepage',
  templateUrl: './firepage.component.html',
  styleUrls: ['./firepage.component.css']
})
export class FirepageComponent implements OnInit {

  stationList: Station[] = [];

  metarSelected: string = '';

  constructor(private FireService: FirebaseDataService, private APIService: FetchDataService) { }

  ngOnInit(): void {
    this.FireService.getAllStation().subscribe(res => {
      this.stationList = res.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Station;
      })
    })
  }

  onDelete(station: Station){
    this.FireService.deleteStation(station)
  }

  openDialog(stationICAO: string, nameStat: string): void {
    // const dialogRef = this.dialog.open(MetardialogComponent, {
    //   width: '300px',
    //   data: {
    //     metar: this.APIService.getMetarRAW(stationICAO),
    //     icao: stationICAO,
    //     name: nameStat
    //   }
    // });

    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log('The dialog was closed');
    // });
  }

}
