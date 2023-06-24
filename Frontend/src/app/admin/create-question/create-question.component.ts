import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { Question } from 'src/app/user/user.service';
import { AdminService, Chapter, SubjectInterface } from '../admin.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  questionFormGroup!: FormGroup;
  question!: Question;
  questionId: number | undefined;
  userType = UserEnum;
  allSubjects: SubjectInterface[] = [];
  chapters: Chapter[] = [];
  subject: FormControl = new FormControl('');
  
  constructor(
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.questionId = data;
    this.questionFormGroup = this._fb.group({
      questionText: ['', [Validators.required]],
      explaination: ['', [Validators.required]],
      subjectId: [, [Validators.required]],
      chapterId: [, [Validators.required]],
      answer: [, [Validators.required]],
      option1: [, [Validators.required]],
      option2: [, [Validators.required]],
      option3: [, [Validators.required]],
      option4: [, [Validators.required]],
      option5: [, [Validators.required]],
      option6: [, [Validators.required]],
    })
  }

  async ngOnInit(): Promise<void> {
    this.allSubjects = await this._adminService.getSubjectWiseChapters();

    this.subject.valueChanges.subscribe(res => {
      this.questionFormGroup.get('subjectId')?.setValue(res);
      for(let i=0 ; i<this.allSubjects.length ; i++) {
        if(this.allSubjects[i].subjectId === res) {
          this.chapters = this.allSubjects[i].chapters;
          break;
        }
      }
    })

    if(this.questionId !== undefined) {
      this.question = await this._adminService.getQuestion(this.questionId);

      let subjectId: number = -1;
      for(let i=0 ; i<this.allSubjects.length ; i++) {
        for(let j=0 ; j<this.allSubjects[i].chapters.length ; j++)
          if(this.question.chapterId === this.allSubjects[i].chapters[j].chapterId) {
            subjectId = this.allSubjects[i].subjectId;
            break;
          }
        if(subjectId !== -1) {
          break;
        }
      }

      this.questionFormGroup.get('questionText')?.setValue(this.question?.questionText);
      this.subject.setValue(subjectId);
      this.questionFormGroup.get('chapterId')?.setValue(this.question?.chapterId);
      this.questionFormGroup.get('explaination')?.setValue(this.question?.explaination);
      this.questionFormGroup.get('answer')?.setValue(this.question.answer);
      this.questionFormGroup.get('option1')?.setValue(this.question?.option1);
      this.questionFormGroup.get('option2')?.setValue(this.question?.option2);
      this.questionFormGroup.get('option3')?.setValue(this.question?.option3);
      this.questionFormGroup.get('option4')?.setValue(this.question?.option4);
      this.questionFormGroup.get('option5')?.setValue(this.question?.option5);
      this.questionFormGroup.get('option6')?.setValue(this.question?.option6);
    }
  }

  async submit() {
    let formData = this.questionFormGroup.value;  
    if(this.questionId === undefined) {
      await this._adminService.createQuestion(formData);
      this.questionFormGroup.reset();
    }
    else {
      await this._adminService.updateQuestion(this.questionId, this.questionFormGroup.value);
    }

    this.dialogRef.close();
  }

}
