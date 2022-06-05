import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        FooterComponent,
        SidenavComponent,
        NavComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
    ],
    exports: [
        FooterComponent,
        SidenavComponent,
        NavComponent,
    ]
})

export class ComponentsModule {}