import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListedComponent } from './students-listed.component';

describe('StudentsListedComponent', () => {
  let component: StudentsListedComponent;
  let fixture: ComponentFixture<StudentsListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsListedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
