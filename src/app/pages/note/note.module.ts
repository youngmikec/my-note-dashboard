import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { NoteComponent } from "./note.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";

const routes: Routes = [
    {
        path: '',
        component: NoteComponent
    },
    {
        path: 'detail/:id',
        component: NoteDetailComponent
    }
]

@NgModule({
    declarations:[
        NoteComponent,
        NoteDetailComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatButtonModule,
    ],
    exports:[]
})

export class NoteModule {}