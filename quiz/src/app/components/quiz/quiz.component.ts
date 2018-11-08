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
  totalQuestions: number;
  constructor(private fileService: FileAccessService) { }

  ngOnInit() {
    this.fileService.getQuestionFile()
      .subscribe(
        data => this.dataModel = data,
        err => console.log(err),
        () => this.calculateQuestionTotal()
      );
  }

  calculateQuestionTotal(): void {
    this.totalQuestions = 0;
    this.dataModel.forEach(s => {
      s.groups.forEach(g => {
        g.questions.forEach(q => {
          if (q.sortOrder !== 0) {
            this.totalQuestions += 1;
          }
        });
      });
    });
  }

  calculateProgress(step: QuizStep): number {
    let result: number;
    let lastQuestion: number;
    step.groups.forEach(g => {
      g.questions.forEach(q => {
        lastQuestion = q.sortOrder;
      });
    });
    result = Math.floor((lastQuestion / this.totalQuestions) * 100);
    return result;
  }

  beginQuiz(): void {
    this.viewMode = QuizViewMode.Quiz;
  }
  onSubmit(): void {
    this.viewMode = QuizViewMode.Marks;
  }

}
