import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetnameOutputComponent } from './setname-output.component';

describe('SetnameOutputComponent', () => {
  let component: SetnameOutputComponent;
  let fixture: ComponentFixture<SetnameOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetnameOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetnameOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
