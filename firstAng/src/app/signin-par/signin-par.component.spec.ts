import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninParComponent } from './signin-par.component';

describe('SigninParComponent', () => {
  let component: SigninParComponent;
  let fixture: ComponentFixture<SigninParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
