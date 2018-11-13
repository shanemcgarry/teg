import {Component, Input, OnInit} from '@angular/core';
import {LevelRule, QuizStep, UserAnswer, TegTextInfo} from '../../models/question.model';
import {LevelType} from '../../models/enums';
import {logging} from 'selenium-webdriver';
import Level = logging.Level;

@Component({
  selector: 'app-quiz-mark',
  templateUrl: './quiz-mark.component.html',
  styleUrls: ['./quiz-mark.component.scss']
})
export class QuizMarkComponent implements OnInit {
  @Input() data: QuizStep[];
  @Input() lang: string;
  userScore: number;
  totalScore: number;
  showScoreCard = false;
  userResults: UserAnswer[];
  levelRules: LevelRule[];
  constructor() { }

  ngOnInit() {
    this.getTotalScore();
    this.buildLevelRules();
    this.userResults = this.markQuiz();
  }

  buildLevelRules() {
    this.levelRules = [];
    const a1Rule = new LevelRule(LevelType.A1, 0, 35,
      new TegTextInfo('You could attempt a TEG A1 (Bonnleibhéal 1) exam, but first look at the sample exams and A1 syllabus.',
        'D’fhéadfá tabhairt faoi scrúdú TEG ag leibhéal A1 ach, i dtús báire, féach na scrúduithe samplacha agus siollabas A1.'),
      new TegTextInfo('http://www.teg.ie/exam-levels/bonnleibh%C3%A9al-2-a2.308.html',
        'http://www.teg.ie/l%C3%A9ibheil-scr%C3%BAduithe/bonnleibh%C3%A9al-1-a1.252.html'));

    const a2Rule = new LevelRule(LevelType.A2, 36, 60,
      new TegTextInfo('You could attempt a TEG A2 (Bonnleibhéal 2) exam, but first look at the sample exams and A2 syllabus.',
        'D’fhéadfá tabhairt faoi scrúdú TEG ag leibhéal A2 ach, i dtús báire, féach na scrúduithe samplacha agus siollabas A2. '),
      new TegTextInfo('http://www.teg.ie/exam-levels/bonnleibh%C3%A9al-2-a2.308.html',
        'http://www.teg.ie/l%C3%A9ibheil-scr%C3%BAduithe/bonnleibh%C3%A9al-2-a2.253.html'));

    const b1Rule = new LevelRule(LevelType.B1, 61, 85,
      new TegTextInfo('You could attempt a TEG B1 (Meánleibhéal 1) exam, but first look at the sample exams and B1 syllabus.',
        'D’fhéadfá tabhairt faoi scrúdú TEG ag leibhéal B1 ach, i dtús báire, féach na scrúduithe samplacha agus siollabas B1.'),
      new TegTextInfo('http://www.teg.ie/exam-levels/me%C3%A1nleibh%C3%A9al-1-b1.309.html',
        'http://www.teg.ie/l%C3%A9ibheil-scr%C3%BAduithe/me%C3%A1nleibh%C3%A9al-1-b1.254.html'));

    const b2Rule = new LevelRule(LevelType.B2, 86, this.totalScore,
      new TegTextInfo('You could attempt a TEG B2 (Meánleibhéal 2) exam, but first look at the sample exams and B2 syllabus.',
        'D’fhéadfá tabhairt faoi scrúdú TEG ag leibhéal B2 nó níos airde ach, i dtús báire, féach na scrúduithe samplacha agus siollabas B2.'),
      new TegTextInfo('http://www.teg.ie/exam-levels/me%C3%A1nleibh%C3%A9al-2-b2.310.html',
        'http://www.teg.ie/l%C3%A9ibheil-scr%C3%BAduithe/me%C3%A1nleibh%C3%A9al-2-b2.255.html'));

    this.levelRules.push(a1Rule);
    this.levelRules.push(a2Rule);
    this.levelRules.push(b1Rule);
    this.levelRules.push(b2Rule);
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

  setActiveTab(): number {
    if (this.lang === 'ga') {
      return 0;
    } else {
      return 1;
    }
  }

  getRuleInfo(): LevelRule {
    return this.levelRules.find(x => this.userScore >= x.beginScore && this.userScore <= x.endScore);
  }

  markQuiz(): UserAnswer[] {
    const results: UserAnswer[] = [];
    this.userScore = 0;
    this.data.forEach(s => {
      s.groups.forEach(g => {
        g.questions.forEach(q => {
          let userMark = 0;
          const userAnswer = q.answer.userResponse ? q.answer.userResponse.trim() : q.answer.userResponse;
          if (!q.answer.value) {
            console.log('uh oh! bad value!');
            console.log(q);
          }

          if (q.answer.value.includes('/')) {
            const possibleValues = q.answer.value.split('/');
            if ( possibleValues.find(x => x.trim() === userAnswer)) {
              userMark = q.answer.mark;
            }
          } else {
            userMark = userAnswer === q.answer.value.trim() ? q.answer.mark : 0;
          }
          this.userScore += userMark;
          results.push(new UserAnswer(q.sortOrder, userAnswer, q.answer.value, q.answer.mark, userMark));
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
