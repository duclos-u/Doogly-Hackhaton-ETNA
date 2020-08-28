import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProComponent } from './signup-pro.component';

describe('SignupProComponent', () => {
  let component: SignupProComponent;
  let fixture: ComponentFixture<SignupProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
