import {challengesView} from "./challenges_view.js"
import {answerIsCorrect} from "./challenges_view.js"

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
    
});

let userAnswers = [];

//  sala 1
$(window).on('load', function() {
  $('#rInicio').modal('show');
});

if (document.getElementById('posterPixar')) {
  const posterPixar = document.getElementById('posterPixar').addEventListener('click', () => {
    renderModalPin()
  });
};

if (document.getElementById('posterDisney')) {
  const posterDisney = document.getElementById('posterDisney').addEventListener('click', () => {
    renderModalChallenge(1);
  });
};

if (document.getElementById('bau')) {
  const bau = document.getElementById('bau').addEventListener('click', () => {
    renderModalChallenge(2);
  });
};

if (document.getElementById('desenho')) {
  const desenho = document.getElementById('desenho').addEventListener('click', () => {
    renderModalChallenge(4)
  });
};

if (document.getElementById('porta')) {
  const porta = document.getElementById('porta').addEventListener('click', () => {
    alert('porta');
  });
};

if (document.getElementById('bola')) {
  const bola = document.getElementById('bola').addEventListener('click', () => {
    renderModalChallenge(3);
  });
};

// sala 2
if (document.getElementById('castelo')) {
  const castelo = document.getElementById('castelo').addEventListener('click', () => {
    renderModalChallenge(6);
  });
};

if (document.getElementById('posterIncredibles')) {
  const posterIncredibles = document.getElementById('posterIncredibles').addEventListener('click', () => {
    renderModalChallenge(5);
  });
};

if (document.getElementById('pocao')) {
  const pocao = document.getElementById('pocao').addEventListener('click', () => {
    renderModalPin()
  });
};

if (document.getElementById('balao')) {
  const balao = document.getElementById('balao').addEventListener('click', () => {
    renderModalChallenge(7);
  });
};

if (document.getElementById('faisca')) {
  const faisca = document.getElementById('faisca').addEventListener('click', () => {
    renderModalChallenge(8);
  });
};

if (document.getElementById('porta2')) {
  const porta2 = document.getElementById('porta').addEventListener('click', () => {
    alert('porta');
  });
};

function renderModalChallenge(id) {
  let challenge = challengesView().find(challenge => challenge.id == id)
  if (userAnswers.includes(challenge.id)) {
    let result = `
    <div class="modal-header">
      <h4 class="modal-title">Desafio completo</h4>
    </div>
    <div class="modal-body text-center">
      <p>Já resolveste este desafio! <br>Continua a explorar a sala de modo a encontrares novos desafios para resolver.</p>
        
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
    </div>
    `
    document.querySelector('#variableModal .modal-content').innerHTML = result
    $('#variableModal').modal('show');
    return
  }
  let result = `
        <div class="modal-header">
          <h4 class="modal-title">${challenge.title}</h4>
        </div>
        <form id="modalChallenge">
          <div class="modal-body text-center">   <!-- Assim ou testar com recurso ao elemento form -->
          <p>${challenge.question}</p>
  `

  if (challenge.type === 'directAnswer') {
    result += `<input type="text" id="answer" required class="text-answers">`
  } else if (challenge.type === 'multipleChoice') {
    result += `
    <div class="d-flex flex-column ms-4">
      <div class="d-flex flex-row text-center ms-2">
        <img src="${challenge.image}" class="text-center" style="width:400px;">
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" name="multipleChoiceQuestion" value="0" required>
        <label for="answer1" class="m-2">${challenge.answers[0]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer2" name="multipleChoiceQuestion" value="1" required>
        <label for="answer2" class="m-2">${challenge.answers[1]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer3" name="multipleChoiceQuestion" value="2" required>
        <label for="answer3" class="m-2">${challenge.answers[2]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer4" name="multipleChoiceQuestion" value="3" required>
        <label for="answer4" class="m-2">${challenge.answers[3]}</label>
      </div>
    </div>
    `
  } else if (challenge.type === 'multipleAnswer') {
    result += `
    <div class="d-flex flex-row justify-content-evenly align-items-center m-3">
      <img src="../assets/img_modal/edna.png">
      <input type="text" class="text-answers" id="answer1" required>
    </div>
    <div class="d-flex flex-row justify-content-evenly align-items-center m-3">
      <img src="../assets/img_modal/genie.png">
      <input type="text" class="text-answers" id="answer2" required>
    </div>
    <div class="d-flex flex-row justify-content-evenly align-items-center m-3">
      <img src="../assets/img_modal/baymax.png">
      <input type="text" class="text-answers" id="answer3" required>
    </div>
    `
  } else if (challenge.type === 'trueOrFalse') {
    result += `
    <div class="d-flex flex-column ms-5">
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" name="trueOrFalseQuestion" value="0" required>
        <label for="answer1" class="m-2">${challenge.answers[0]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer2" name="trueOrFalseQuestion" value="1" required>
        <label for="answer2" class="m-2">${challenge.answers[1]}</label>
      </div>
    </div>
    `
  }

  result += `
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btnSubmit border-0">Submeter</button>
            <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
          </div>
        </form>
  `

  document.querySelector('#variableModal .modal-content').innerHTML = result
  $('#variableModal').modal('show');

  document.querySelector('button[type="submit"]').addEventListener('click', () => {
    let userAnswer;
    if (challenge.type === 'directAnswer') {
      userAnswer = document.querySelector('#answer').value;
      console.log(userAnswer);
    } else if (challenge.type === 'multipleChoice') {
      userAnswer = +document.querySelector('input[name="multipleChoiceQuestion"]:checked').value;
      console.log(userAnswer);
    } else if (challenge.type === 'multipleAnswer') {
      const userAnswer1 = document.querySelector('#answer1').value
      const userAnswer2 = document.querySelector('#answer2').value
      const userAnswer3 = document.querySelector('#answer3').value
      userAnswer = [userAnswer1, userAnswer2, userAnswer3]
      console.log(userAnswer);
    } else if (challenge.type === 'trueOrFalse') {
      userAnswer = +document.querySelector('input[name="trueOrFalseQuestion"]:checked').value;
      console.log(userAnswer);
    }
    if (answerIsCorrect(userAnswer, challenge)) {
      userAnswers.push(challenge.id)
      renderModalAnswered('correct');
    } else {
      renderModalAnswered('incorrect')
    }
  })
}

function renderModalPin() {
  let result = `
        <div class="modal-header">
          <h4 class="modal-title">Pin encontrado</h4>
        </div>
        <div class="modal-body text-center">
          <p>Parabéns! Encontraste um pin.<br>Continua a explorar as salas e a resolver desafios para ganhares mais ! </p>
          <img src="../assets/img_modal/pin.png" class="img-fluid mt-3">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
        </div>
  `

  document.querySelector('#variableModal .modal-content').innerHTML = result
  $('#variableModal').modal('show');
}

function renderModalAnswered(answer) {
  let result = ''
  if (answer == 'correct') {
    result += `
    <div class="modal-header">
      <h4 class="modal-title">Desafio completo</h4>
    </div>
    `
    if (userAnswers.length == 2 || userAnswers.length == 6) {
      result += `
      <div class="modal-body text-center">
        <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um avatar.<br>Continua a resolver desafios para ganhar mais! </p>
        <img src="../assets/avatares/Pooh.png" class="img-fluid mt-3">
      </div>
      `
    } else {
      result += `
      <div class="modal-body text-center">
        <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um pin.<br>Continua a resolver desafios para ganhar mais! </p>
        <img src="../assets/img_modal/pin.png" class="img-fluid mt-3">
      </div>
      `
    }
  } else {
    result += `
    <div class="modal-header">
      <h4 class="modal-title">Desafio incompleto</h4>
    </div>
    <div class="modal-body text-center">
      <p>Infelizmente não era essa a resposta ao desafio.<br>Volta para a sala para poderes tentar novamente. </p>
      <img src="../assets/img_modal/sadness.png" class="img-fluid">
    </div>
    `
  }
  result += `
  <div class="modal-footer">
    <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
  </div>
  `
  document.querySelector('#variableModal .modal-content').innerHTML = result
  $('#variableModal').modal('show');
}