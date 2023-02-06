import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentsComponent } from './components/home-contents/home-contents.component';
import {RouterModule} from "@angular/router";
import {DataService} from "./services/data.service";
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/forms/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentsComponent,
    UsersComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeContentsComponent},
      {path: 'users', component: UsersComponent}
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [DataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
