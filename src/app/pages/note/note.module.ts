import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';


import { NoteComponent } from "./note.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { NoteAddComponent } from "./note-add/note-add.component";
import { NoteEditComponent } from "./note-edit/note-edit.component";
import { NoteDeleteDialogComponent } from './note-delete-dialog/note-delete-dialog.component';

const routes: Routes = [
    {
        path: '',
        component: NoteComponent
    },
    {
        path: 'add',
        component: NoteAddComponent
    },
    {
        path: 'edit/:id',
        component: NoteEditComponent
    },
    {
        path: 'detail/:id',
        component: NoteDetailComponent
    }
]

@NgModule({
    declarations:[
        NoteComponent,
        NoteDetailComponent,
        NoteAddComponent,
        NoteEditComponent,
        NoteDeleteDialogComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
    ],
    exports:[
        NoteDeleteDialogComponent,
    ]
})

export class NoteModule {}