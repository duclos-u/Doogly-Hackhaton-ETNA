import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPageComponent } from './pro-page.component';

describe('ProPageComponent', () => {
  let component: ProPageComponent;
  let fixture: ComponentFixture<ProPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
