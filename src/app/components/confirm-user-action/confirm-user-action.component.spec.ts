import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUserActionComponent } from './confirm-user-action.component';

describe('ConfirmUserActionComponent', () => {
  let component: ConfirmUserActionComponent;
  let fixture: ComponentFixture<ConfirmUserActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmUserActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmUserActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
