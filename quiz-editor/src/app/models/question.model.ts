export class Question {
  beforeText: string;
  afterText: string;
  type: QuestionType;
  answer: QuestionAnswer;
  sortOrder: number;

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
  level: LevelType;
  questions: Question[];
  assets: FileAsset[];

  constructor() {
    this.questions = [];
    this.assets = [];
  }
}
