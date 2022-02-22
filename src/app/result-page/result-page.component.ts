import { Component, OnInit } from '@angular/core';
import { Metar } from '../models/metar.model';
import { SearchBarComponent } from "../search-bar/search-bar.component"
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  


  constructor(private ShareData: ShareDataService) { }

  ngOnInit(): void {

  }

}
