import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { NOTES_RESPONSE, NOTE_RESPONSE, GENERAL_RESPONSE, DB_NOTES } from '../models';
import { ApiService } from '../services';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class Notes {
    url: string = environment.APP_URL;
    constructor(
        private apiService: ApiService
    ){}

    private loadFromMemory(): NOTES_RESPONSE {
        return {
            status: 'successful',
            message: `${DB_NOTES.length} notes found`,
            per_page: 10,
            total: DB_NOTES.length,
            has_next: false,
            data: DB_NOTES
        }
    }
    
    retrieveNotes(): Observable<NOTES_RESPONSE> {
        return this.apiService.getApi(`${this.url}/note`).pipe(
            map((res: NOTES_RESPONSE) => {
                if(res === null || undefined){
                    return this.loadFromMemory();
                }
                return res;
            }),
        )
    }

    retrieveSingleNote(id: number): Observable<NOTE_RESPONSE> {
        return this.apiService.getApi(`${this.url}/note/${id}`).pipe(
            map((res: NOTE_RESPONSE) => res)
        )
    }

    createNote(payload: any): Observable<NOTE_RESPONSE> {
        return this.apiService.postApi(`${this.url}/note`, payload).pipe(
            map((res: NOTE_RESPONSE) => res)
        )
    }

    updateNote(id: number, payload: any): Observable<NOTES_RESPONSE> {
        return this.apiService.updateApi(`${this.url}/note/${id}`, payload).pipe(
            map((res: NOTES_RESPONSE) => res)
        )
    }

    deleteNote(id: number): Observable<GENERAL_RESPONSE> {
        return this.apiService.deleteApi(`${this.url}/note/${id}`).pipe(
            map((res: GENERAL_RESPONSE) => res)
        )
    }

    
}