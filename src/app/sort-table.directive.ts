import { Directive, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortService } from './sort.service';
import {SortInfo} from "./fetch-data.service";

@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective implements OnInit, OnDestroy {
  @Output() onColumnSorted = new EventEmitter<SortInfo>();

  private colSortSubscribe: Subscription;

  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.colSortSubscribe = this.sortService.colSortedObservable.subscribe((event: SortInfo) => {
      this.onColumnSorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.colSortSubscribe.unsubscribe();
  }
}
