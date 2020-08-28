import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupParComponent } from './signup-par.component';

describe('SignupParComponent', () => {
  let component: SignupParComponent;
  let fixture: ComponentFixture<SignupParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
