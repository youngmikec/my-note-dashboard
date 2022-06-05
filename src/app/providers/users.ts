import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { USER_RESPONSE } from '../models';
import { ApiService } from '../services';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class Users {
    url: string = environment.APP_URL;
    constructor(
        private apiService: ApiService
    ){}
    
    retrieveUsers(): Observable<USER_RESPONSE> {
        return this.apiService.getApi(`${this.url}/user`).pipe(
            map((res: USER_RESPONSE) => res)
        )
    }
    
}