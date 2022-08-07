import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from 'src/app/user/home/model-test/model-test.service';

@Component({
  selector: 'topic-selector',
  templateUrl: './topic-selector.component.html',
  styleUrls: ['./topic-selector.component.scss']
})
export class TopicSelectorComponent {

  isSelected: boolean = false;
  @Input() topic: Topic | undefined;

  @Output() selectTopic = new EventEmitter();
  @Output() deSelectTopic = new EventEmitter();

  constructor() { }

  takeAction() {
    this.isSelected = !this.isSelected;
    if(this.isSelected) {
      this.selectTopic.emit(this.topic?.topicId);
    }
    else {
      this.deSelectTopic.emit(this.topic?.topicId);
    }
  }
}
