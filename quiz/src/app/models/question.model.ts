export class Question {
  level: LevelType;
  beforeText: string;
  afterText: string;
  type: QuestionType;
  answer: QuestionAnswer;
  sortOrder: number;
  showAnswer: boolean;

  constructor() {}
}

export class QuestionAnswer {
  value: string;
  mark: number;
  options: AnswerOption[];

  constructor() {
    this.options = [];
  }
}

export class AnswerOption {
  type: OptionType;
  value: string;
  label: string;
  assetInfo?: FileAsset;

  constructor() {}
}

export class FileAsset {
  type: AssetType;
  value: string;
  isExternal: boolean;

  constructor() {}
}

export class QuestionGroup {
  infoText: string;
  questions: Question[];
  assets: FileAsset[];

  constructor() {
    this.questions = [];
    this.assets = [];
  }
}
