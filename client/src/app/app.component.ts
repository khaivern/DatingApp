import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    users: any = [];

    constructor(private http: HttpClient, private accountService: AccountService) {}

    ngOnInit(): void {
        this.getUsers();
        this.setCurrentUser();
    }

    private getUsers(): void {
        this.http.get('https://localhost:5001/api/users').subscribe(res => (this.users = res));
    }

    setCurrentUser(): void {
        const userString = localStorage.getItem('user');
        if (!userString) return;
        const user: User = JSON.parse(userString);
        this.accountService.setCurrentUser(user);
    }
}
