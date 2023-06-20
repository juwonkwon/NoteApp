import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/listof-notes/listof-notes.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { NoteCardComponent } from './note/note.component';
import { NoteDetailsComponent } from './pages/notecreate/notecreate.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    MainpageComponent,
    NoteCardComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
