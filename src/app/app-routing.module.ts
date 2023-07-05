import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './pages/listof-notes/listof-notes.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { NoteDetailsComponent } from './pages/notecreate/notecreate.component';


const routes: Routes = [
  {path: '', component: MainpageComponent,
   children:[
    {path: '', component: NotesListComponent}, 
    {path: 'new', component: NoteDetailsComponent},
    {path: ':id', component: NoteDetailsComponent}] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }