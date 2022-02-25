import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';

@Component({
  selector: 'app-station-page',
  templateUrl: './station-page.component.html',
  styleUrls: ['./station-page.component.css']
})
export class StationPageComponent implements OnInit {

  @Input() station?: Station[];

  constructor() { }

  ngOnInit(): void {
  }

}
