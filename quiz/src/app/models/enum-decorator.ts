import {AssetType, QuizViewMode} from './enums';
import { QuestionType } from './enums';
import { LevelType } from './enums';
import { OptionType } from './enums';

export function AssetTypeAware(constructor: Function) {
  constructor.prototype.AssetType = AssetType;
}

export function QuestionTypeAware(constructor: Function) {
  constructor.prototype.QuestionType = QuestionType;
}

export function LevelTypeAware(constructor: Function) {
  constructor.prototype.LevelType = LevelType;
}

export function OptionTypeAware(constructor: Function) {
  constructor.prototype.OptionType = OptionType;
}

export function QuizViewModeAware(constructor: Function) {
  constructor.prototype.QuizViewMode = QuizViewMode;
}
