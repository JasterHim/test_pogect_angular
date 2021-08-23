import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduledTaskComponent } from './unscheduled-task.component';

describe('UnscheduledTaskComponent', () => {
  let component: UnscheduledTaskComponent;
  let fixture: ComponentFixture<UnscheduledTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnscheduledTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscheduledTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
