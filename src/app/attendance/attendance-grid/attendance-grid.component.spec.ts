import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGridComponent } from './attendance-grid.component';

describe('AttendanceGridComponent', () => {
  let component: AttendanceGridComponent;
  let fixture: ComponentFixture<AttendanceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
