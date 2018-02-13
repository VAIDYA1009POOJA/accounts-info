import { Component } from '@angular/core';
import { FetchDataService, Accounts, Response } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  acc_list: Accounts[];
  limit: number = 3;

  constructor(private getData: FetchDataService) {
    this.getData.fetchAccounts().subscribe(
      (res: Response) => {
        this.acc_list = res.data;
      }
    );
  }

  getAccountNumber(num: number) : string {
    return ('000' + num).slice(-4);
  }

  setLimit() {
    this.limit = this.acc_list.length;
  }
}
