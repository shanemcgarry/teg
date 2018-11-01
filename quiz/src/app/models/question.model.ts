import { LevelType, QuestionType, OptionType, AssetType} from './enums';

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
  userResponse: string;
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
  instructionText: string;
  additionalHTML?: string;
  questions: Question[];
  assets: FileAsset[];

  constructor() {
    this.questions = [];
    this.assets = [];
  }
}

export class QuizStep {
  title: string;
  sortOrder: number;
  groups: QuestionGroup[];

  constructor() {
    this.groups = [];
  }
}

export class UserAnswer {
  questionNumber: number;
  userAnswer: string;
  correctAnswer: string;
  validMarks: number;
  userMark: number;

  constructor(questionNumber: number, userAnswer: string, correctAnswer: string, validMarks: number, userMark: number) {
    this.questionNumber = questionNumber;
    this.userAnswer = userAnswer;
    this.correctAnswer = correctAnswer;
    this.validMarks = validMarks;
    this.userMark = userMark;
  }
}

export class LevelRule {
  level: LevelType;
  beginScore: number;
  endScore: number;

  constructor(level: LevelType, beginScore: number, endScore: number) {
    this.level = level;
    this.beginScore = beginScore;
    this.endScore = endScore;
  }
}

