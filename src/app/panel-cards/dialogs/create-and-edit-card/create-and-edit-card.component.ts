import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-and-edit-card',
  templateUrl: './create-and-edit-card.component.html',
  styleUrls: ['./create-and-edit-card.component.scss']
})
export class CreateAndEditCardComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateAndEditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
