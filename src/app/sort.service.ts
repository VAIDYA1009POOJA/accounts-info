import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {SortInfo} from "./fetch-data.service";

@Injectable()
export class SortService {
  private colSource = new Subject<SortInfo>();
  colSortedObservable = this.colSource.asObservable();

  constructor() { }

  nextColSorted(event: SortInfo) {
    this.colSource.next(event);
  }
}

