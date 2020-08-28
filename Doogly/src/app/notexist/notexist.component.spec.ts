import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotexistComponent } from './notexist.component';

describe('NotexistComponent', () => {
  let component: NotexistComponent;
  let fixture: ComponentFixture<NotexistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotexistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
