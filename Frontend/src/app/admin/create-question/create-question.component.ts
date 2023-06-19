import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserEnum } from 'src/app/shared/page-container/page-container.component';
import { Question } from 'src/app/user/user.service';
import { AdminService, Chapter, SubjectInterface } from '../admin.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  question: FormGroup;
  questionId: number | undefined;
  userType = UserEnum;
  allSubjects: SubjectInterface[] = [];
  chapters: Chapter[] = [];
  subject: FormControl = new FormControl('');
  
  constructor(
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.question = this._fb.group({
      questionText: ['', [Validators.required]],
      explaination: ['', [Validators.required]],
      subjectId: [, [Validators.required]],
      chapterId: [, [Validators.required]],
      answer: ['', [Validators.required]],
      option1: ['', [Validators.required]],
      option2: ['', [Validators.required]],
      option3: ['', [Validators.required]],
      option4: ['', [Validators.required]],
      option5: ['', [Validators.required]],
      option6: ['', [Validators.required]],
    })
  }

  async ngOnInit(): Promise<void> {
    this.questionId = this._activatedRoute.snapshot.params['id'];
    this.allSubjects = await this._adminService.getSubjectWiseChapters();

    this.subject.valueChanges.subscribe(res => {
      this.question.get('subjectId')?.setValue(res);
      for(let i=0 ; i<this.allSubjects.length ; i++) {
        if(this.allSubjects[i].subjectId === res) {
          this.chapters = this.allSubjects[i].chapters;
          break;
        }
      }
    })

    if(this.questionId !== undefined) {
      let question: Question = await this._adminService.getQuestion(this.questionId);

      let subjectId: number = -1;
      for(let i=0 ; i<this.allSubjects.length ; i++) {
        for(let j=0 ; j<this.allSubjects[i].chapters.length ; j++)
          if(question.chapterId === this.allSubjects[i].chapters[j].chapterId) {
            subjectId = this.allSubjects[i].subjectId;
            break;
          }
        if(subjectId !== -1) {
          break;
        }
      }

      this.question.get('questionText')?.setValue(question?.questionText);
      this.subject.setValue(subjectId);
      this.question.get('chapterId')?.setValue(question?.chapterId);
      this.question.get('explaination')?.setValue(question?.explaination);
      this.question.get('answer')?.setValue(this.getOptionNoFromAnswer(question));
      this.question.get('option1')?.setValue(question?.option1);
      this.question.get('option2')?.setValue(question?.option2);
      this.question.get('option3')?.setValue(question?.option3);
      this.question.get('option4')?.setValue(question?.option4);
      this.question.get('option5')?.setValue(question?.option5);
      this.question.get('option6')?.setValue(question?.option6);
    }
  }

  getOptionNoFromAnswer(question:Question) {
    let optionNo: string = '';
    switch (question.answer) {
      case question.option1:
        optionNo = '1';
        break;
      case question.option2:
        optionNo = '2';
        break;
      case question.option3:
        optionNo = '3';
        break;
      case question.option4:
        optionNo = '4';
        break;
      case question.option5:
        optionNo = '5';
        break;
      case question.option6:
        optionNo = '6';
        break;
    }
    return optionNo;
  }

  getAnswer() {
    let answer: string = '';
    switch (this.question.value.answer) {
      case '1':
        answer = this.question.get('option1')?.value;
        break;
      case '2':
        answer = this.question.get('option2')?.value;
        break;
      case '3':
        answer = this.question.get('option3')?.value;
        break;
      case '4':
        answer = this.question.get('option4')?.value;
        break;
      case '5':
        answer = this.question.get('option5')?.value;
        break;
      case '6':
        answer = this.question.get('option6')?.value;
        break;
    }
    return answer
  }

  async submit() {
    let formData = this.question.value;  
    if(this.questionId === undefined) {
      formData.answer = this.getAnswer();
      await this._adminService.createQuestion(formData);
      this.question.reset();
    }
    else {
      formData.answer = this.getAnswer();
      await this._adminService.updateQuestion(this.questionId, this.question.value);
    }
  }

}
