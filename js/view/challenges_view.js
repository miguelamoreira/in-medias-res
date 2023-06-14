import * as Challenge from "../model/challenge_model.js";
import * as Room from "../model/room_model.js";
import {getUserLogged, avatares} from "../model/user_model.js";
import {renderProgressBar} from "./rooms_view.js"

export function challengesView() {
    Challenge.init(); 

    const challengePosterDisney = new Challenge.directAnswerChallenge(
        1, 
        'Parques de diversão da Disney', 
        'Para além dos seus trabalhos cinematográficos, a Disney também é conhecida pelos seus famosos parques de diversões que se encontram espalhados por vários cantos do mundo. Qual é o nome do parque situado no continente europeu?',
        'Disneyland'
    );

    const challengeArc = new Challenge.multipleChoiceChallenge(
        2, 
        'Criação da Disney', 
        'Quem foi um dos criadores da Disney?', 
        ['George Lucas', 'Walt Disney', 'Steve Jobs', 'Ub Iwerks'], 
        1,
        '../assets/img_modal/disneyland.png'
    );

    const challengeBall = new Challenge.trueOrFalseChallenge(
        3,
        'Mickey Mouse',
        'A história da Disney já conta com mais de 100 anos. No entanto, a sua personagem mais icónica, Mickey Mouse, tem apenas 50 anos.',
        ['Verdadeiro', 'Falso'],
        1
    );
    
    const challengeDraw = new Challenge.directAnswerChallenge(
        4,
        'Primeira co-produção Disney/Pixar',
        'Qual é o nome do filme a que a descrição seguinte se refere?\nUm brinquedo de um cowboy sente-se ameaçado quando um novo brinquedo chega ao seu mundo.',
        'Toy Story'
    );

    const challengePosterIncredibles = new Challenge.multipleDirectAnswerChallenge(
        5,
        'Maiores sucessos',
        'Conecta as personagens aos seus filmes respetivos:\nAlladin; Big Hero 6; The Incredibles',
        ['The Incredibles', 'Alladin', 'Big Hero 6']
    );

    const challengeCastle = new Challenge.trueOrFalseChallenge(
        6,
        'Cinematografia da Disney',
        'O repertório da Disney é tão extenso e variado que é possível dividi-lo em 8 eras diferentes, todas elas com as suas próprias características',
        ['Verdadeiro', 'Falso'],
        0
    );

    const challengeBalloon = new Challenge.directAnswerChallenge(
        7,
        'Maiores sucessos',
        'Qual é o nome do filme a que a descrição seguinte se refere?\nUm idoso rabugento e um escuteiro ingénuo partem numa aventura, utilizando uma casa repleta de balões como meio de transporte.',
        'Up'
    );

    const challengeCar = new Challenge.multipleChoiceChallenge(
        8,
        'Personagens favoritas do público',
        'Qual é o nome desta personagem?',
        ['Wall-E', 'Kuzco', 'Stitch', 'Woody'],
        2,
        '../assets/img_modal/stitch2.png'
    )

    const challenges = [
        challengePosterDisney,
        challengeArc,
        challengeBall,
        challengeDraw,
        challengePosterIncredibles,
        challengeCastle,
        challengeBalloon,
        challengeCar,
    ];

    return challenges
}

export function renderModalChallenge(id) {
    let userInfo = getUserLogged();
    let challenge = challengesView().find(challenge => challenge.id == id)
    if (userInfo.challenges.includes(challenge.id)) {
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
            <div class="modal-body text-center">   
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
        let userInfo = getUserLogged();
        userInfo.challenges.push(challenge.id)
        sessionStorage.setItem('loggedUser', JSON.stringify(userInfo));
        renderModalAnswered('correct');
        renderProgressBar();
      } else {
        renderModalAnswered('incorrect')
      }
    })
}

function renderModalAnswered(answer) {
    let userInfo = getUserLogged();
    let result = ''
    if (answer == 'correct') {
      result += `
      <div class="modal-header">
        <h4 class="modal-title">Desafio completo</h4>
      </div>
      `
      if (location.href.includes('jogar_2.html')) {
        let userCode = Room.getUserCode()
        let roomCode = Room.getRoomCode()
        let digitIndex = userCode.findIndex(digit => digit === '')
        userCode[digitIndex] = roomCode[digitIndex]
        sessionStorage.setItem('userCode', JSON.stringify(userCode))
        result += `
        <div class="modal-body text-center">
          <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um dos números do código da porta.
            <br>Continua a resolver desafios para descobrir os restantes números!</p>
          <div class="code d-flex flex-row justify-content-evenly mt-5">
            <div class="code-digit">${userCode[0]}</div>
            <div class="code-digit">${userCode[1]}</div>
            <div class="code-digit">${userCode[2]}</div>
            <div class="code-digit">${userCode[3]}</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btnDismiss" class="btn btnClose border-0">Fechar</button>
        </div>
        `
        document.querySelector('#variableModal .modal-content').innerHTML = result
        $('#variableModal').modal('show'); 
  
        document.querySelector('#btnDismiss').addEventListener('click', () => {
          result = `
          <div class="modal-header">
            <h4 class="modal-title">Desafio completo</h4>
          </div>
          `
          if (userInfo.challenges.length == 6) {
            result += `
            <div class="modal-body text-center">
              <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um avatar.<br>Continua a resolver desafios para ganhar mais! </p>
              <img src="../assets/avatares/${avatares[3]}" class="img-fluid mt-3">
            </div>
            `
          } else {
            result += `
            <div class="modal-body text-center">
              <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um pin.<br>Continua a resolver desafios para ganhar mais! </p>
              <img src="../assets/img_modal/pin.png" class="img-fluid mt-3">
            </div>
            `
            userInfo.pins += 1;
            sessionStorage.setItem('loggedUser', JSON.stringify(userInfo));
          }
          result += `
          <div class="modal-footer">
            <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
          </div>
          `
          document.querySelector('#variableModal .modal-content').innerHTML = result
          $('#variableModal').modal('show'); 
        })
  
      } else {
        if (userInfo.challenges.length == 2) {
          result += `
          <div class="modal-body text-center">
            <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um avatar.<br>Continua a resolver desafios para ganhar mais! </p>
            <img src="../assets/avatares/${avatares[4]}" class="img-fluid mt-3">
          </div>
          `
        } else {
          result += `
          <div class="modal-body text-center">
            <p>Parabéns! Conseguiste completar o desafio e, como recompensa, desbloqueaste um pin.<br>Continua a resolver desafios para ganhar mais! </p>
            <img src="../assets/img_modal/pin.png" class="img-fluid mt-3">
          </div>
          `
          userInfo.pins += 1;
          sessionStorage.setItem('loggedUser', JSON.stringify(userInfo));
        }
        result += `
        <div class="modal-footer">
          <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
        </div>
        `
        document.querySelector('#variableModal .modal-content').innerHTML = result
        $('#variableModal').modal('show'); 
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
      <div class="modal-footer">
        <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
      </div>
      `
      document.querySelector('#variableModal .modal-content').innerHTML = result
      $('#variableModal').modal('show');
    }
}

export function renderModalPin(sessionStorageKey) {
  let userInfo = getUserLogged();
  const hasOpenedModal = sessionStorage.getItem(sessionStorageKey);
  let result = '';

  if (!hasOpenedModal) {
    result = `
      <div class="modal-header">
        <h4 class="modal-title">Pin encontrado</h4>
      </div>
      <div class="modal-body text-center">
        <p>Parabéns! Encontraste um pin.<br>Continua a explorar as salas e a resolver desafios para ganhares mais!</p>
        <img src="../assets/img_modal/pin.png" class="img-fluid mt-3">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
      </div>
    `;

    userInfo.pins += 1;
    sessionStorage.setItem('loggedUser', JSON.stringify(userInfo));

    sessionStorage.setItem(sessionStorageKey, 'true');
  } else {
    result = `
      <div class="modal-header">
        <h4 class="modal-title">Pin encontrado</h4>
      </div>
      <div class="modal-body text-center">
        <p>Já tinhas encontrado o pin que estava escondido neste objeto.<br>Continua a explorar as salas e a resolver desafios para ganhares mais!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
      </div>
    `;
  }
  document.querySelector('#variableModal .modal-content').innerHTML = result;
  $('#variableModal').modal('show');
}

function answerIsCorrect(userAnswer, challenge) {
    console.log(challenge.answers);
    if (challenge.type === 'directAnswer') {
        return userAnswer.toLowerCase() === challenge.answer.toLowerCase()
    } else if (challenge.type === 'multipleChoice' || challenge.type === 'trueOrFalse') {
        return userAnswer === challenge.correctAnswer
    } else if (challenge.type === 'multipleAnswer') {
        return userAnswer.toString().toLowerCase() === challenge.answers.toString().toLowerCase();
    }
}

challengesView();
