import { Component, Input, OnInit } from '@angular/core';
import { Metar } from 'src/app/models/metar.model';

@Component({
  selector: 'app-metar-page',
  templateUrl: './metar-page.component.html',
  styleUrls: ['./metar-page.component.css']
})
export class MetarPageComponent implements OnInit {

  @Input() metar?: Metar[];

  constructor() { }

  ngOnInit(): void {
  }

}
