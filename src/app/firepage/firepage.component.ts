import { Component, OnInit } from '@angular/core';
import { Station } from '../models/station.model';
import { FirebaseDataService } from '../services/firebase-data.service';

@Component({
  selector: 'app-firepage',
  templateUrl: './firepage.component.html',
  styleUrls: ['./firepage.component.css']
})
export class FirepageComponent implements OnInit {

  stationList: Station[] = [];

  constructor(private FireService: FirebaseDataService) { }

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

}
