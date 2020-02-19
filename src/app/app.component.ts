import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { Account } from './models/Account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private us: AccountsService) {}
  accounts: Account[];
  ngOnInit(): void {
    this.us.getAccounts().subscribe({
      next: accounts => {
        this.accounts = accounts;
        console.log(accounts);
      }
    });
  }
}
