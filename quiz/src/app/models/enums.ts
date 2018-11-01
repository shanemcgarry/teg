export enum QuestionType {
  MultipleChoice = 'multi',
  FillInTheBlank = 'fill-in'
}

export enum LevelType {
  None = '',
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2'
}

export enum AssetType {
  AudioClip = 'audio',
  Image = 'image'
}

export enum OptionType {
  Standard = 'string',
  Asset = 'asset'
}

export enum QuizViewMode {
  Instructions,
  Quiz,
  Marks
}
