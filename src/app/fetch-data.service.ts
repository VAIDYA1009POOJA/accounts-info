import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

export interface Accounts {
  _id      : string;
  acc_name : string;
  acc_num  : number;
  available: number;
  change   : number;
}

export interface Response {
  status : number;
  data   : Array<Accounts>;
  message: string;
}

@Injectable()
export class FetchDataService {

  constructor(private http: HttpClient) {}

  private url: string = './assets/accounts.data';

  fetchAccounts(): Observable<Object> {
    return this.http.get(this.url);
  }
}
