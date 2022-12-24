import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    model: any = {};

    constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

    login(): void {
        this.accountService.login(this.model).subscribe({
            next: response => {
                this.router.navigateByUrl('/members');
            },
            error: err => {
                this.toastr.error(err.error);
            },
        });
    }

    logout(): void {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }
}
