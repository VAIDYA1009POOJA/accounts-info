import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SortService {

  constructor() { }

  private colSource = new Subject<ColSortEvent>();

  colSorted$ = this.colSource.asObservable();

  colSorted(event: ColSortEvent) {
    this.colSource.next(event);
  }
}

export interface ColSortEvent {
  sortCol: string;
  sortOrder: string;
}

