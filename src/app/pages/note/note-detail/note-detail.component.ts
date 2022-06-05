import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NOTE, DB_NOTES } from '../../../models';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  record: NOTE | undefined;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id: any = '';
    this.route.params.subscribe({
      next: (res: any) => {
        id = res.id;
      }
    });
    this.record = DB_NOTES.find((item: NOTE) => item.id === parseInt(id))
  }


}
