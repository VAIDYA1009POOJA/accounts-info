import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ColSortEvent {
  sortCol: string;
  sortOrder: string;
}

@Injectable()
export class SortService {

  constructor() { }

  private colSource = new Subject<ColSortEvent>();

  colSorted$ = this.colSource.asObservable();

  colSorted(event: ColSortEvent) {
    this.colSource.next(event);
  }
}
