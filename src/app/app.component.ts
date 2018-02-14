import {Component, OnInit} from '@angular/core';
import { FetchDataService, Accounts, SortInfo } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  acc_list: Accounts[];
  limit: number = 3;

  constructor(private fetchData: FetchDataService) {  }

  ngOnInit() {
    this.getData({ sortCol: '', sortOrder: 'asc'});
  }

  getData(info: SortInfo) {
    this.acc_list = this.fetchData.fetchAccounts(info);
  }

  onColumnSorted($event: SortInfo) {
    console.log($event);
    this.getData($event);
  }
}
