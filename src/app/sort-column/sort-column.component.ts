import { Component, OnInit, Input, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SortService } from '../sort.service';

@Component({
  selector: '[app-sort-column]',
  templateUrl: './sort-column.component.html',
  styleUrls: ['./sort-column.component.scss']
})

export class SortColumnComponent implements OnInit, OnDestroy {

  private colSortSubscription: Subscription;

  constructor(private sortService: SortService) { }

  @Input('app-sort-column') colName: string;
  sortOrder: string = '';

  @HostBinding('class.sorted') isSorted = false;


  @HostListener('click')
  sort() {
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    this.isSorted = true;
    this.sortService.nextColSorted({ sortCol: this.colName, sortOrder: this.sortOrder});
  }

  ngOnInit() {
    this.colSortSubscription = this.sortService.colSortedObservable.subscribe(event => {
      if (this.colName != event.sortCol) {
        this.sortOrder = '';
        this.isSorted = false;
      }
    });
  }

  ngOnDestroy() {
    this.colSortSubscription.unsubscribe();
  }
}
