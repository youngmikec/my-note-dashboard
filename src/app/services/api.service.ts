import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, retry, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    option: any = {
        headers: new HttpHeaders({
            "Content_Type": "application/json",
            "withCredentials" : "true",
            "proxy": "https://note-xyz.herokuapp.com",
            "Access-Control-Allow-Origin": "https://mynote-dashboard.netlify.app",
            "Cookie": "auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cGlyZXMiOnRydWUsImV4cGlyYXRpb25fZGF0ZSI6IjIwMjItMDYtMDUgMTQ6MDU6MjYuNDY2MTU0In0.9dKKYQh0gFbMxWhpsR6XrFEUBIiFYQKeSOuN30gy49E;path=/;SameSite=None;Secure;"
        })
    }

    constructor( private http: HttpClient){}

    private handleError(error: HttpErrorResponse) {
        if (error instanceof ErrorEvent) {
          console.error(`\n\n::Frontend Error: ${error}\n\n`);
        } else {
          console.error(`\n\n::Backend Error:\n\n`);
        }
        // return throwError(error.error); // Already extracted by ErrorInterceptor
        return throwError(error);
      }

    getApi(url: string): Observable<any> {
        return this.http.get(url, this.option).pipe(
            map((res: any) => res),
            catchError(this.handleError)
        );
    }

    postApi(url: string, payload: any): Observable<any> {
        return this.http.post(url, payload, this.option).pipe(
            map((res: any) => res),
            catchError(this.handleError)
        )
    }

    updateApi(url: string, payload: any): Observable<any> {
        return this.http.put(url, payload, this.option).pipe(
            map((res: any) => res),
            catchError(this.handleError)
        )
    }

    deleteApi(url: string): Observable<any> {
        return this.http.delete(url, this.option).pipe(
            retry(3),
            catchError(this.handleError)
        )
    }
}