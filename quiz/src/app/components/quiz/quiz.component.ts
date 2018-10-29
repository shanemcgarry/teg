import { Component, OnInit } from '@angular/core';
import { QuestionGroup } from '../../models/question.model';
import {FileAccessService} from '../../controllers/file-access.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  beginQuiz = false;
  dataModel: QuestionGroup[];
  constructor(private fileService: FileAccessService) { }

  ngOnInit() {
    this.fileService.getQuestionFile()
      .subscribe(
        data => this.dataModel = data,
        err => console.log(err),
        () => console.log('Question file loaded')
      );
  }

}
