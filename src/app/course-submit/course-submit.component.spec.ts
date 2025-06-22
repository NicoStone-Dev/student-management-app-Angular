import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSubmitComponent } from './course-submit.component';

describe('CourseSubmitComponent', () => {
  let component: CourseSubmitComponent;
  let fixture: ComponentFixture<CourseSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
