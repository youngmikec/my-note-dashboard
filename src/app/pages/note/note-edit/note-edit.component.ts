import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NOTE, NOTES_RESPONSE, NOTE_RESPONSE } from '../../../models';
import { Notes } from '../../../providers';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit, AfterViewInit {

  editForm: FormGroup;
  loading: boolean = false;
  sub: Subscription;
  record: NOTE | any = null;

  constructor(
    private formBuilder: FormBuilder,
    private notes: Notes,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.editForm = this.createEditForm();
    let id: any = '';
    this.sub = this.route.params.subscribe({
      next: (res: any) => {
        id = res.id;
         this.getNoteDetail(parseInt(id));
      }
    });
  }

  ngOnInit(): void {
    this.setEditForm();
  }

  ngAfterViewInit(): void {
    if(this.record){
      this.setEditForm();
    }
  }

  createEditForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  setEditForm(){
    this.editForm.patchValue({
      title: this.record?.title ? this.record?.title : '',
      content: this.record?.content ? this.record?.content : ''
    })
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

  onSubmit(){
    this.loading = true;
    const payload = this.editForm.value;

    this.notes.updateNote(this.record.id, payload).subscribe({
      next: (res: NOTES_RESPONSE) => {
        if(res.status === 'success'){
          this.loading = false;
          console.log(res.message);
          this.router.navigate(['/notes']);
        }
      },
      error: (error: any) => {
        this.loading = false;
        console.log(error);
      }
    })
  }

}

