import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionGroup } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  dataModel: QuestionGroup[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      p => {
        const action = p['action'];
        if (action === 'new') {
          this.dataModel = [];
        }
      },
      err => console.log(err),
      () => console.log('Route configured.')
    );
  }

}
