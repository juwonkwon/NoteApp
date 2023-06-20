import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteCardComponent implements OnInit{
  @Input() title='';
  @Input() body='';
  @Input() link='';

  @Output('delete') delete: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', { static: true }) smaller!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true })
  bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2){}

  ngOnInit() {
    
  }
  onDelete(){
    this.delete.emit();
  }
}