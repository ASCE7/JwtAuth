import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ConfigService } from './config.service';
import { LoginCredentials } from '../models';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    tokenName: string = 'jwtToken';
    invalidLogin: boolean = false;
    roleClaimName: string = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

    constructor(private http: HttpClient, private router: Router, private configService: ConfigService, private jwtHelper: JwtHelperService) { }

    login(credentials: LoginCredentials) {
        const payload = JSON.stringify(credentials);
        this.http
            .post(this.configService.getApiBaseUrl() + '/api/auth/login', payload, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .subscribe(
                response => {
                    const token = (response as any).token;
                    localStorage.setItem(this.tokenName, token);
                    this.router.navigate(['']);
                    this.invalidLogin = false;
                },
                () => {
                    this.invalidLogin = true;
                }
            );
    }

    logOut() {
        localStorage.removeItem(this.tokenName);
        this.router.navigate(['/login']);
    }

    logOutIfNotAuthorized(): boolean {
        if (!this.isUserLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    isUserLoggedIn(): boolean {
        var token = this.retrieveTokenFromLocalStorage();
        return token && !this.jwtHelper.isTokenExpired(token);
    }

    getUserRole(): string {
        var decryptedToken = this.jwtHelper.decodeToken(this.retrieveTokenFromLocalStorage());
        return decryptedToken[this.roleClaimName];
    }

    private retrieveTokenFromLocalStorage(): string {
        return localStorage.getItem(this.tokenName);
    }
}
