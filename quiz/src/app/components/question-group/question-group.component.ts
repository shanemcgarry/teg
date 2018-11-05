import { Component, Input, OnInit } from '@angular/core';
import { QuestionGroup } from '../../models/question.model';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss']
})
export class QuestionGroupComponent implements OnInit {
  @Input() data: QuestionGroup;
  constructor() { }

  ngOnInit() {
  }

}
