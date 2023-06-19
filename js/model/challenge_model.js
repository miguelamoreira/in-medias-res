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

export function roomCodeExists() {
  return sessionStorage.getItem('roomCode') ? true : false;
}

export function getRoomCode() {
  return JSON.parse(sessionStorage.getItem("roomCode"));
}

export function getUserCode() {
  return JSON.parse(sessionStorage.getItem("userCode"));
}

export function deleteRoomCodes() {
  sessionStorage.removeItem('roomCode');
  sessionStorage.removeItem('userCode');
}

export function deleteOpenedModals() {
  sessionStorage.removeItem('hasOpenedModal1');
  sessionStorage.removeItem('hasOpenedModal2');
  sessionStorage.removeItem('hasOpenedLesson1');
  sessionStorage.removeItem('hasOpenedLesson2');
  sessionStorage.removeItem('hasOpenedLesson3');
}