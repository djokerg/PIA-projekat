import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerDialogComponent } from './time-picker-dialog.component';

describe('TimePickerDialogComponent', () => {
  let component: TimePickerDialogComponent;
  let fixture: ComponentFixture<TimePickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePickerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
