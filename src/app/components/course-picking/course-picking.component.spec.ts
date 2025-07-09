import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePickingComponent } from './course-picking.component';

describe('CoursePickingComponent', () => {
  let component: CoursePickingComponent;
  let fixture: ComponentFixture<CoursePickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePickingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
