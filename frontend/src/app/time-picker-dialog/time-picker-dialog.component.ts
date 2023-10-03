import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-time-picker-dialog',
  templateUrl: './time-picker-dialog.component.html',
  styleUrls: ['./time-picker-dialog.component.css']
})
export class TimePickerDialogComponent {

  selectedTime: string; // Store the selected time

  constructor(public dialogRef: MatDialogRef<TimePickerDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close(this.selectedTime);
  }

}
