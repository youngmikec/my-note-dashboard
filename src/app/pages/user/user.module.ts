import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

import { UserComponent } from "./user.component";


const routes: Routes = [
    {
        path: '',
        component: UserComponent
    }
]

@NgModule({
    declarations:[
        UserComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatCardModule,
    ],
    exports:[]
})

export class UserModule {}