import { Component, Input, OnInit } from '@angular/core';
import { Taf } from 'src/app/models/taf.model';

@Component({
  selector: 'app-taf-page',
  templateUrl: './taf-page.component.html',
  styleUrls: ['./taf-page.component.css']
})
export class TafPageComponent implements OnInit {

  @Input() taf?: Taf[];

  constructor() { }

  ngOnInit(): void {
  }

}
