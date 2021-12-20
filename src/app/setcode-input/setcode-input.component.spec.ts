import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcodeInputComponent } from './setcode-input.component';

describe('SetcodeInputComponent', () => {
  let component: SetcodeInputComponent;
  let fixture: ComponentFixture<SetcodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetcodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetcodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
