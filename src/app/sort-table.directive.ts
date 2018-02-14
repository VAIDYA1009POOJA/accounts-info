import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortService } from './sort.service';

@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective {

  private colSortSubscribe: Subscription;

  constructor(private sortService: SortService) { }

  @Output()
  sorted = new EventEmitter();

  ngOnInit() {
    this.colSortSubscribe = this.sortService.colSorted$.subscribe(event => {
      this.sorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.colSortSubscribe.unsubscribe();
  }
}
