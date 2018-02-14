import { Component } from '@angular/core';
import { FetchDataService, Accounts, SortInfo } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  acc_list: Accounts[];
  limit: number = 3;

  constructor(private fetchData: FetchDataService) {  }

  ngOnInit() {
    this.getData({ sortCol: '', sortOrder: 'asc'});
  }

  getData(info: SortInfo) {
    this.acc_list = this.fetchData.fetchAccounts(info);
  }

  getAccountNumber(num: number) : string {
    return ('000' + num).slice(-4);
  }

  setLimit() {
    this.limit = this.acc_list.length;
  }

  onSorted($event) {
    console.log($event);
    this.getData($event);
  }
}
