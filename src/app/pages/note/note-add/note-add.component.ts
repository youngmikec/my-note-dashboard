import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NOTE_RESPONSE } from '../../../models';
import { Notes } from '../../../providers';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  addForm: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private notes: Notes,
    private router: Router,
  ) {
    this.addForm = this.createAddForm();
  }

  ngOnInit(): void {
  }

  createAddForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSubmit(){
    this.loading = true;
    const payload = this.addForm.value;

    this.notes.createNote(payload).subscribe({
      next: (res: NOTE_RESPONSE) => {
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
