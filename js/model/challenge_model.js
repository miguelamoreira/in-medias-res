let challenges;

export function init() {
    challenges = localStorage.challenges ? JSON.parse(localStorage.challenges) : [];
}

export class Challenge {
    id = 0;
    type = '';
    title = '';
    question = '';

    constructor(id, type, title, question) {
      this.id = id;
      this.type = type;
      this.title = title;
      this.question = question;
    };
};

export class multipleChoiceChallenge extends Challenge {
  answers = [];
  correctAnswer = 0;
  image = '';

  constructor(id, title, question, answers, correctAnswer, image) {
    super(id, 'multipleChoice', title, question);
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.image = image;
  };
};

export class directAnswerChallenge extends Challenge {
  answer = '';

  constructor(id, title, question, answer) {
    super(id, 'directAnswer', title, question);
    this.answer = answer;
  }
}

export class multipleDirectAnswerChallenge extends Challenge {
  answers = [];

  constructor(id, title, question, answers) {
    super(id, 'multipleAnswer', title, question);
    this.answers = answers;
  }
}

export class trueOrFalseChallenge extends Challenge {
  answers = [];
  correctAnswer = 0;

  constructor(id, title, question, answers, correctAnswer) {
    super(id, 'trueOrFalse', title, question);
    this.answers = answers;
    this.correctAnswer = correctAnswer
  };
};
