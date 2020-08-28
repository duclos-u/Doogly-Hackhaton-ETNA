import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProComponent } from './story-pro.component';

describe('StoryProComponent', () => {
  let component: StoryProComponent;
  let fixture: ComponentFixture<StoryProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
