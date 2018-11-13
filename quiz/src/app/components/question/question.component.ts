import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AnswerOption, Question, QuestionAnswer } from '../../models/question.model';
import {OptionTypeAware, QuestionTypeAware} from '../../models/enum-decorator';
import { QuestionType, OptionType } from '../../models/enums';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
@QuestionTypeAware
@OptionTypeAware
export class QuestionComponent implements OnInit {
  @Input() data: Question;
  questionType = QuestionType;
  optionType = OptionType;
  constructor() { }

  ngOnInit() {
  }

  getAssetInfo(answerOption: AnswerOption): string {
    let result = `./assets/${answerOption.assetInfo.value}`;
    if (answerOption.assetInfo.isExternal) {
      result = answerOption.assetInfo.value;
    }
    return result;
  }
}
