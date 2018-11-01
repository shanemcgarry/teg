import {Component, Input, OnInit} from '@angular/core';
import {LevelRule, QuizStep, UserAnswer} from '../../models/question.model';
import {LevelType} from '../../models/enums';

@Component({
  selector: 'app-quiz-mark',
  templateUrl: './quiz-mark.component.html',
  styleUrls: ['./quiz-mark.component.scss']
})
export class QuizMarkComponent implements OnInit {
  @Input() data: QuizStep[];
  userScore: number;
  totalScore: number;
  levelRules: LevelRule[];
  constructor() { }

  ngOnInit() {
    this.getTotalScore();
    this.buildLevelRules();
    this.markQuiz();
  }

  buildLevelRules() {
    this.levelRules = [];
    this.levelRules.push(new LevelRule(LevelType.A1, 0, 44));
    this.levelRules.push(new LevelRule(LevelType.A2, 45, 65));
    this.levelRules.push(new LevelRule(LevelType.B1, 66, 87));
    this.levelRules.push(new LevelRule(LevelType.B2, 89, this.totalScore));
  }

  getTotalScore() {
    this.totalScore = 0;
    this.data.forEach( s => {
      s.groups.forEach( g => {
        g.questions.forEach(q => {
          this.totalScore += q.answer.mark;
        });
      });
    });
  }

  markQuiz(): UserAnswer[] {
    const results: UserAnswer[] = [];
    this.userScore = 0;
    this.data.forEach(s => {
      s.groups.forEach(g => {
        g.questions.forEach(q => {
          const userMark = q.answer.userResponse === q.answer.value ? q.answer.mark : 0;
          this.userScore += userMark;
          results.push(new UserAnswer(q.sortOrder, q.answer.userResponse, q.answer.value, q.answer.mark, userMark));
        });
      });
    });
    return results;
  }

  getLevel(): string {
    let result;
    this.levelRules.forEach( r => {
      if (this.userScore >= r.beginScore && this.userScore <= r.endScore) {
        result = r.level;
      }
    });
    return result.toString();
  }

}
