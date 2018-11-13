import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Question, QuizStep} from '../../models/question.model';
import {FileAccessService} from '../../controllers/file-access.service';
import {QuizViewModeAware} from '../../models/enum-decorator';
import {QuizViewMode} from '../../models/enums';
import {MatTabChangeEvent} from '@angular/material';
import {QuestionGroupComponent} from '../question-group/question-group.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
@QuizViewModeAware
export class QuizComponent implements OnInit {
  @ViewChildren(QuestionGroupComponent) questionGroup: QueryList<QuestionGroupComponent>;
  viewMode: QuizViewMode = QuizViewMode.Instructions;
  dataModel: QuizStep[];
  quizViewMode = QuizViewMode;
  totalQuestions: number;
  preferredLanguage = 'ga';
  currentStep = 0;
  constructor(private fileService: FileAccessService) { }

  ngOnInit() {
    this.fileService.getQuestionFile()
      .subscribe(
        data => this.dataModel = data,
        err => console.log(err),
        () => this.calculateQuestionTotal()
      );
  }

  onNavigate(step: number): void {
    this.questionGroup.toArray()[this.currentStep].stopAudio();
    this.currentStep += step;
  }

  onTabChanged(e: MatTabChangeEvent): void {
    if (e.index === 0) {
      this.preferredLanguage = 'ga';
    } else {
      this.preferredLanguage = 'en';
    }
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
