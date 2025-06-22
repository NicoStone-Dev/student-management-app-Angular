import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListedComponent } from './courses-listed.component';

describe('CoursesListedComponent', () => {
  let component: CoursesListedComponent;
  let fixture: ComponentFixture<CoursesListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
