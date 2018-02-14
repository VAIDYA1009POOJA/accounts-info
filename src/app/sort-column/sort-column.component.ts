import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortService } from '../sort.service';

@Component({
  selector: 'app-sort-column',
  templateUrl: './sort-column.component.html',
  styleUrls: ['./sort-column.component.scss']
})

export class SortColumnComponent implements OnInit {

  private colSortSubscribe: Subscription;

  constructor(private sortService: SortService) { }

  @Input('app-sort-column')
  colName: string;

  @Input()
  sortOrder: string = '';

  @HostBinding('class.sorted') isSorted = false;

  @HostListener('click')
  sort() {
    console.log('Here');
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.isSorted = true;
    this.sortService.colSorted({ sortCol: this.colName, sortOrder: this.sortOrder});
  }

  ngOnInit() {
    this.colSortSubscribe = this.sortService.colSorted$.subscribe(event => {
      if (this.colName != event.sortCol) {
        this.sortOrder = '';
        this.isSorted = false;
      }
    });
  }

  ngOnDestroy() {
    this.colSortSubscribe.unsubscribe();
  }
}
