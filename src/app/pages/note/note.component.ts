import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NOTE, NOTES_RESPONSE, DB_NOTES } from '../../models';
import { Notes } from '../../providers';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  notesArray: NOTE[] = [];
  sub: Subscription | null = null;

  constructor(
    private notes: Notes,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNotesRecords();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  getNotesRecords(): void {
    this.loading = true;
    this.sub = this.notes.retrieveNotes().subscribe({
      next: (res: NOTES_RESPONSE) => {
        if(res.status === 'success'){
          this.notesArray = res.data;
        }
      },
      error: (error: any) => {
        this.loading = false;
        this.notesArray = DB_NOTES
        console.log(this.notesArray);
        console.log('error => ', error);
      }
    })
  }

  trackByFunction(index: number, item: NOTE): number {
    return item.id
  }

  getToDetail(note: NOTE) {
    this.router.navigate([`/notes/detail/${note.id}`])
  }

}
