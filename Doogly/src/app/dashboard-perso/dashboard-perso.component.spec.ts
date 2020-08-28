import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPersoComponent } from './dashboard-perso.component';

describe('DashboardPersoComponent', () => {
  let component: DashboardPersoComponent;
  let fixture: ComponentFixture<DashboardPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
