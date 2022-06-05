import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GENERAL_RESPONSE, NOTE } from '../../../models';
import { Notes } from '../../../providers';


@Component({
  selector: 'app-note-delete-dialog',
  templateUrl: './note-delete-dialog.component.html',
  styleUrls: ['./note-delete-dialog.component.scss']
})
export class NoteDeleteDialogComponent implements OnInit {

  @Output() onDelete = new EventEmitter<boolean> ();
  title: string = 'Would you like to delete this note record?';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NOTE,
    public dialogRef: MatDialogRef<NoteDeleteDialogComponent>,
    private notes: Notes,
  ) { }

  ngOnInit(): void {
  }

  deleteNote(){
    this.notes.deleteNote(this.data.id).subscribe({
      next: (res: GENERAL_RESPONSE) => {
        console.log(res.message);
        this.onDelete.emit(true);
      },
      error: (error: any) => {
        this.onDelete.emit(false);
        console.log(error);
      }
    })
  }

}
