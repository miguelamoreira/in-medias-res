import {challengesView} from "./challenges_view.js"

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
    
});

//  sala 1
$(window).on('load', function() {
  $('#rInicio').modal('show');
});

if (document.getElementById('posterPixar')) {
  const posterPixar = document.getElementById('posterPixar').addEventListener('click', () => {
    alert('pin');
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
    alert('pin');
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
  console.log(challenge);
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
        <input type="radio" id="answer1" required>
        <label for="answer1" class="m-2">${challenge.answers[0]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" required>
        <label for="answer2" class="m-2">${challenge.answers[1]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" required>
        <label for="answer3" class="m-2">${challenge.answers[2]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" required>
        <label for="answer4" class="m-2">${challenge.answers[3]}</label>
      </div>
    </div>
    `
  } else if (challenge.type === 'multipleAnswer') {
    result += `
    <div class="d-flex flex-row justify-content-evenly align-items-center m-3">
      <img src="../assets/img_modal/edna.png">
      <input type="text" class="text-answers" required>
    </div>
    <div class="d-flex flex-row justify-content-evenly align-items-center m-3">
      <img src="../assets/img_modal/genie.png">
      <input type="text" class="text-answers" required>
    </div>
    <div class="d-flex flex-row justify-content-evenly align-items-center m-3">
      <img src="../assets/img_modal/baymax.png">
      <input type="text" class="text-answers" required>
    </div>
    `
  } else if (challenge.type === 'trueOrFalse') {
    result += `
    <div class="d-flex flex-column ms-5">
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" required>
        <label for="answer1" class="m-2">${challenge.answers[0]}</label>
      </div>
      <div class="d-flex flex-row m-2">
        <input type="radio" id="answer1" required>
        <label for="answer2" class="m-2">${challenge.answers[1]}</label>
      </div>
    </div>
    `
  }

  result += `
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btnSubmit border-0" data-bs-dismiss="modal">Submeter</button>
            <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
          </div>
        </form>
  `

  document.querySelector('#variableModal .modal-content').innerHTML = result
  console.log(document.querySelector('#variableModal'));
  $('#variableModal').modal('show');
}