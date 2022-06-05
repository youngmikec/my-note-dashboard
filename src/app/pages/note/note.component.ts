import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NOTE, NOTES_RESPONSE, DB_NOTES } from '../../models';
import { Notes } from '../../providers';
import { NoteDeleteDialogComponent } from './note-delete-dialog/note-delete-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
]
})
export class NoteComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  showAction: boolean = false;
  currentNoteId: number = 0;
  notesArray: NOTE[] = [];
  sub: Subscription | null = null;

  constructor(
    private notes: Notes,
    private router: Router,
    public dialog: MatDialog
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
          this.loading = false;
          this.notesArray = res.data;
        }
      },
      error: (error: any) => {
        this.loading = false;
        console.log('error => ', error);
      }
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, note: NOTE): void {
    this.dialog.open(NoteDeleteDialogComponent, {
      width: '350px',
      data: note
    }
    );
  }

  toggleShowAction(id: number){
    this.showAction = !this.showAction;
    this.currentNoteId = id;
  }

  trackByFunction(index: number, item: NOTE): number {
    return item.id
  }

  getToDetail(note: NOTE) {
    this.router.navigate([`/notes/detail/${note.id}`])
  }

  goToEdit(note: NOTE) {
    this.router.navigate([`/notes/edit/${note.id}`])
  }

  createNote() {
    this.router.navigate([`/notes/add`])
  }

  handleOnDelete($event: boolean){
    $event && this.getNotesRecords();
    return;
  }

}
