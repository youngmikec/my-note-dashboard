import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { LOGIN_PAYLOAD, USER_RESPONSE, SIGNUP_RESPONSE } from '../models';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    url: string = environment.APP_URL;
    constructor(
        private apiService: ApiService,
        private router: Router
    ){}

    login(payload: LOGIN_PAYLOAD): Observable<USER_RESPONSE[]> {
        return this.apiService.postApi(`${this.url}/user/login`, payload).pipe(
            map((res: USER_RESPONSE[]) => {
                this.setLocalStorage('user', JSON.stringify(res[0].data));
                document.cookie = 'auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cGlyZXMiOnRydWUsImV4cGlyYXRpb25fZGF0ZSI6IjIwMjItMDYtMDYgMTE6MjQ6MjAuMTUzNDAzIn0.wDvhH27nRUJH6uH4z_JJrfpldEDp4n3uplhamj473uo;path=/;SameSite=None;Secure;'
                this.router.navigate(['users']);
                return res;
            })
        )
    }

    signUp(payload: SIGNUP_RESPONSE): Observable<USER_RESPONSE> {
        return this.apiService.postApi(`${this.url}/user`, payload).pipe(
            map((res: USER_RESPONSE) => {
                this.setLocalStorage('user', JSON.stringify(res.data));
                document.cookie = 'auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cGlyZXMiOnRydWUsImV4cGlyYXRpb25fZGF0ZSI6IjIwMjItMDYtMDYgMTE6MjQ6MjAuMTUzNDAzIn0.wDvhH27nRUJH6uH4z_JJrfpldEDp4n3uplhamj473uo;path=/;SameSite=None;Secure;'
                return res;
            })
        )
    }

    logout(){
        this.clearLocalStorage();
    }



    setLocalStorage(name: string, data: string): void {
        localStorage.setItem(name, data);
    }

    getLocalStorage(name: string): string | null {
        return localStorage.getItem(name);
    }

    clearLocalStorage(){
        localStorage.clear();
    }

    isAuthenticated(): boolean {
        const result = this.getLocalStorage('user');
        if(result) return true;
        return false;
    }
}