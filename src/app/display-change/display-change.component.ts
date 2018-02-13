import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-change',
  templateUrl: './display-change.component.html',
  styleUrls: ['./display-change.component.scss']
})
export class DisplayChangeComponent implements OnInit {
  @Input() todayChange: number;
  @Input() available: number;
  changeType: string;
  percentChange: number;
  absChange: number;

  constructor() { }

  ngOnInit() {
    this.absChange = Math.abs(this.todayChange);
    this.percentChange = this.todayChange / this.available;

    if (this.todayChange < 0) {
      this.changeType = 'neg';
    } else if (this.todayChange > 0) {
      this.changeType = 'pos';
    } else {}
  }
}
