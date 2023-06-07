let challenges;

export function init() {
    challenges = localStorage.challenges ? JSON.parse(localStorage.challenges) : [];
}

class challenge {
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

class multipleChoiceChallenge extends challenge {
  answers = [];
  correctAnswer = 0;

  constructor(id, title, question, answers, correctAnswer) {
    super(id, 'multipleChoice', title, question);
    this.answers = answers;
    this.correctAnswer = correctAnswer
  };
};

class directAnswerChallenge extends challenge {
  answer = '';

  constructor(id, title, question, answer) {
    super(id, 'directAnswer', title, question);
    this.answer = answer;
  }
}

class multipleDirectAnswerChallenge extends challenge {
  answers = [];

  constructor(id, title, question, answers) {
    super(id, 'multipleAnswer', title, question);
    this.answers = answers;
  }
}