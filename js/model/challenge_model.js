let challenges;

export function init() {
    challenges = localStorage.challenges ? JSON.parse(localStorage.challenges) : [];
  }

class challenge {
    id = '';

    // escolha múltipla
    question = '';
    answers = [];
    correctAnswer = 0; //index

    // resposta direta 
    question = '';
    answer = '';


}