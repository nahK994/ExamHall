import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-explanation-modal',
  templateUrl: './explanation-modal.component.html',
  styleUrls: ['./explanation-modal.component.scss']
})
export class ExplanationModalComponent {

  explaination: string | undefined;

  constructor(
    private dialogRef: MatDialogRef<ExplanationModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.explaination = data;
  }

  close() {
    this.dialogRef.close();
  }


}
