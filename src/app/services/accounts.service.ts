import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, range} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {Account} from '../models/Account';
@Injectable({
    providedIn: 'root',
})
export class AccountsService {
    constructor( private http: HttpClient ) { }
    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>('https://localhost:44386/api/accounts');
    }
}
