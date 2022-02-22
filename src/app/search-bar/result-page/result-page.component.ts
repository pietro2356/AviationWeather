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

  $air? = new Array<any>();
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.$air = [];
    
    if (!changes['metar'].firstChange) {
      // this.metar = changes['metar'].currentValue
      changes['metar'].currentValue.forEach((item: any) => {
        this.$air?.push(item)
      });
    }


  }

  ngOnInit(): void {
  }

}
