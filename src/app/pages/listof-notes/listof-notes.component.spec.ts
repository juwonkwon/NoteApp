import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './listof-notes.component';

describe('ListofNotesComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesListComponent]
    });
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
