import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninProComponent } from './signin-pro.component';

describe('SigninProComponent', () => {
  let component: SigninProComponent;
  let fixture: ComponentFixture<SigninProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
