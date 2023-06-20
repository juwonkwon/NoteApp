import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { trigger, transition, style, animate, query, stagger} from '@angular/animations'

import {NgForm} from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './listof-notes.component.html',
  styleUrls: ['./listof-notes.component.scss'],
  animations: [
    trigger('note',[
      //enter the app animation
      transition('void => *',[
        //initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0
        }),
        //animate spacing
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom:'*',
          paddingRight:'*',
          paddingLeft:'*'
        })),
        animate(150)
      ]),

      transition('*=> void', [
        //first bigger
        animate(50, style({
          transform:'scale(1.05)'
        })),//scale down to normal
        animate(50, style({
          transform:'scale(1)',
          opacity: 0.75
        })),
        //make smaller and disappear
        animate('120ms ease-out', style({
          opacity:0,
          transform: 'scale(0.68)'
        })),
        //animate the spacing
        animate('150ms ease-out', style({
          height: 0,
          opacity: 0,
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0
        }))
      ])
    ]),
    trigger('list',[
      transition('*=>*',[
        query(':enter',[
          style({
            opacity:0,
            height:0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ],{
          optional: true
        })
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit{
  
  note!: Note;
  noteId!: number;
  new!: boolean
  notes: Note[] = new Array<Note>();
  
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.notes = this.notesService.getAll();
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if(params['id']){
        this.note =this.notesService.get(params['id']);
        this.noteId = params['id']
        this.new = false;
      }else{
        this.new = true;
      }
  })
}

  deleteNote(index: number){
    this.notesService.delete(index);
  }
  filter(query: string){
    query = query.toLowerCase().trim();
    let all: Note[] = new Array<Note>();
    let words: string[] = query.split(' ');
    words = this.removeDupes(words);
    
  }
  removeDupes(arr: Array<any>) : Array<any>{
    let unique: Set<any> = new Set<any>();
    arr.forEach(e => unique.add(e));
    return Array.from(unique);
  }
  onSubmit(form: NgForm){
    if(this.new){
      this.notesService.add(form.value);
      form.reset();
    }else{
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
    //Save the Note

  }
  changePlus(){
    let button = document.querySelector('.vertical') as HTMLElement;
    button.classList.toggle('open');
    let line = document.querySelector('.line-wrapper') as HTMLElement;
    line.classList.toggle('open');
    let edit = document.querySelector('.noteedit') as HTMLElement;
    edit.classList.toggle('open');
    let notes = document.querySelector('.notelist') as HTMLElement;
    notes.classList.toggle('open');
  }
}

