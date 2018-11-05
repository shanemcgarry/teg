import { Component, Input, OnInit } from '@angular/core';
import { UserAnswer } from '../../models/question.model';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss']
})
export class ResultDetailsComponent implements OnInit {
  @Input() data: UserAnswer[];
  displayColumns = ['questionNumber', 'userAnswer', 'correctAnswer', 'mark'];
  constructor() { }

  ngOnInit() {
  }

}
