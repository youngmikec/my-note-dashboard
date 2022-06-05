import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Notes } from '../../../providers';
import { NOTE, NOTE_RESPONSE } from '../../../models';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit, OnDestroy {
  record: NOTE | undefined;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private notes: Notes
  ) {
    let id: any = '';
    this.sub = this.route.params.subscribe({
      next: (res: any) => {
        id = res.id;
         this.getNoteDetail(parseInt(id));
      }
    });

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getNoteDetail(id: number){
    this.notes.retrieveSingleNote(id).subscribe({
      next: (res: NOTE_RESPONSE) => {
        if(res.status === 'success'){
          this.record = res.data;
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }


}
