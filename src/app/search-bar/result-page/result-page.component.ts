import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Metar, Station } from 'src/app/models/metar.model';
import { Taf } from 'src/app/models/taf.model';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, OnChanges {

  @Input() metar?: Observable<Metar>;
  @Input() station?: Observable<Station>;
  @Input() taf?: Observable<Taf>;

  @Input() childMessage?: string;

  $air? = new Array<any>();
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['metar'].currentValue);
    console.log(changes['station']);
    console.log(changes['taf']);
    console.log(changes['childMessage']);
    this.getData();
  }

  ngOnInit(): void {
  }

  getData(){
    this.metar?.forEach(item => {
      this.$air?.push(item)
    })
  }

}
