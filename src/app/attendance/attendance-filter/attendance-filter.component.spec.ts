import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceFilterComponent } from './attendance-filter.component';

describe('AttendanceFilterComponent', () => {
  let component: AttendanceFilterComponent;
  let fixture: ComponentFixture<AttendanceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
