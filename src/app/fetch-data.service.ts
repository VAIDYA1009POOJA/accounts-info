import {Injectable} from '@angular/core';

@Injectable()
export class FetchDataService {

  constructor() { }

  private accounts: Accounts[] = [
    {"acc_name": "AAA", "acc_num": 29, "available": 39160334.42, "change": -31435.87},
    {"acc_name": "AAA", "acc_num": 1812, "available": 2010926.1, "change": 38881.63},
    {"acc_name": "AAA", "acc_num": 3810, "available": 10050054.07, "change": 8916.69},
    {"acc_name": "IRA", "acc_num": 146, "available": 15884302.39, "change": 7430.83},
    {"acc_name": "IRA", "acc_num": 5200, "available": 5763.36, "change": -8916.69},
    {"acc_name": "IRA", "acc_num": 0, "available": 0, "change": -8916.69},
    {"acc_name": "REG", "acc_num": 2019, "available": 13465679.34, "change": 0}
  ];

  fetchAccounts(info: SortInfo): Accounts[] {
    return this.accounts.sort((a, b) => {
      if (a[info.sortCol] === undefined) {
        return 0;
      } else if (info.sortOrder === 'asc') {
        return a[info.sortCol] - b[info.sortCol];
      } else {
        return b[info.sortCol] - a[info.sortCol];
      }

    });
  }
}

export interface Accounts {
  acc_name: string;
  acc_num: number;
  available: number;
  change: number;
}

export interface SortInfo {
  sortCol: string;
  sortOrder: string;
}

