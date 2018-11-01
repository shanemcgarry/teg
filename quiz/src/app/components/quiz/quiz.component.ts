import {Component, OnInit} from '@angular/core';
import {QuizStep} from '../../models/question.model';
import {FileAccessService} from '../../controllers/file-access.service';
import {QuizViewModeAware} from '../../models/enum-decorator';
import {QuizViewMode} from '../../models/enums';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
@QuizViewModeAware
export class QuizComponent implements OnInit {
  viewMode: QuizViewMode = QuizViewMode.Instructions;
  dataModel: QuizStep[];
  quizViewMode = QuizViewMode;
  constructor(private fileService: FileAccessService) { }

  ngOnInit() {
    this.fileService.getQuestionFile()
      .subscribe(
        data => this.dataModel = data,
        err => console.log(err),
        () => console.log('Question file loaded')
      );
  }
  beginQuiz(): void {
    this.viewMode = QuizViewMode.Quiz;
  }
  onSubmit(): void {
    this.viewMode = QuizViewMode.Marks;
  }

}
