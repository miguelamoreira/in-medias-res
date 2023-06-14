import {renderModalChallenge, renderModalPin} from "./challenges_view.js"
import {getUserLogged, getUsers, avatares} from "../model/user_model.js";
import * as Room from "../model/room_model.js";

$(document).ready(function(e) {
  $('img[usemap]').rwdImageMaps(); 
});

//  sala 1
$(window).on('load', function() {
  $('#rInicio').modal('show');
  countdownTimer();
});

if (document.getElementById('salaArmazem')) {
  const armazem = document.getElementById('salaArmazem').addEventListener('click', () => {
    renderModalInfo();
  });
};

if (document.getElementById('posterPixar')) {
  const posterPixar = document.getElementById('posterPixar').addEventListener('click', () => {
    renderModalPin('hasOpenedModal1')
  });
};

if (document.getElementById('posterDisney')) {
  const posterDisney = document.getElementById('posterDisney').addEventListener('click', () => {
    let userInfo = getUserLogged()
    if (userInfo.challenges.includes(3)) {
      renderModalChallenge(1);
    } else {
      renderModalBlocked()
    }
  });
};

if (document.getElementById('bau')) {
  const bau = document.getElementById('bau').addEventListener('click', () => {
    renderModalChallenge(2);
  });
};

if (document.getElementById('desenho')) {
  const desenho = document.getElementById('desenho').addEventListener('click', () => {
    let userInfo = getUserLogged()
    if (userInfo.challenges.includes(1)) {
      renderModalChallenge(4);
    } else {
      renderModalBlocked()
    }
  });
};

if (document.getElementById('porta')) {
  const porta = document.getElementById('porta').addEventListener('click', () => {
    renderDoorModal();
  });
};

if (document.getElementById('bola')) {
  const bola = document.getElementById('bola').addEventListener('click', () => {
    let userInfo = getUserLogged()
    if (userInfo.challenges.includes(2)) {
      renderModalChallenge(3)
    } else {
      renderModalBlocked()
    }
  });
};

// sala 2
if (!Room.roomCodeExists()) {
  let roomCode = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]
  sessionStorage.setItem('roomCode', JSON.stringify(roomCode))
  sessionStorage.setItem('userCode', JSON.stringify(['','','','']))
}

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
    renderModalPin('hasOpenedModal2')
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

function countdownTimer() {
  const countdownDuration = 30 * 60 * 1000;

  let goneTime = sessionStorage.getItem('goneTime');
  let remainingTime = sessionStorage.getItem('remainingTime');

  const startTime = goneTime ? new Date().getTime() - goneTime : new Date().getTime();

  let countdown = setInterval(function() {
    let currentTime = new Date().getTime();

    goneTime = currentTime - startTime;
    remainingTime = countdownDuration - goneTime;

    sessionStorage.setItem('goneTime', goneTime);
    sessionStorage.setItem('remainingTime', remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countdown);
      document.getElementById("txtContador").innerHTML = "00:00";
      sessionStorage.removeItem('goneTime');
      sessionStorage.removeItem('remainingTime');
    } else {
      const userInfo = getUserLogged();
      const minutesRemaining = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((remainingTime % (1000 * 60)) / 1000);
      const minutesGone = Math.floor((goneTime % (1000 * 60 * 60)) / (1000 * 60));
      const secondsGone = Math.floor((goneTime % (1000 * 60)) / 1000);

      let formMinRemaining = ("0" + minutesRemaining).slice(-2);
      let formSecRemaining = ("0" + secondsRemaining).slice(-2);
      let formMinGone = ("0" + minutesGone).slice(-2);
      let formSecGone = ("0" + secondsGone).slice(-2);

      let countdownText = formMinRemaining + ":" + formSecRemaining;
      document.getElementById("txtContador").innerHTML = countdownText;

      if (userInfo.challenges.length === 8) {
        clearInterval(countdown);
        let userTime = userInfo.time.replace(':', '');
        let countdownGone = formMinGone + formSecGone;

        if (countdownGone < userTime) {
          let countdownSave = formMinGone + ":" + formSecGone;
    
          userInfo.time = countdownSave;
          sessionStorage.setItem('loggedUser', JSON.stringify(userInfo));
          localStorage.setItem('loggedUser', JSON.stringify(userInfo));
        }
      }
    }
  }, 1000);
}

function renderModalInfo() {
  let userInfo = getUserLogged();
  let result = '';
  if (location.href.includes('jogar_1.html')) {
    result = `
    <div class="modal-header">
        <h4 class="modal-title">Armazém</h4>
    </div>
    <div class="modal-body">
      <div class="d-flex flex-row ms-5">
        <img src="${userInfo.image}" class="img-fluid">
        <p class="ms-5 align-self-center">${userInfo.username}</p>
      </div>
      <div class="d-flex flex-column mt-5 ms-5">
        <p class="ms-5">Sala: 1</p>
        <p class="ms-5">Desafios: ${userInfo.challenges.length}/8</p>
        <p class="ms-5">Pins: ${userInfo.pins}</p>
      </div> 
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
    </div>
      `;
  } else if (location.href.includes('jogar_2.html')) {
    result = `
    <div class="modal-header">
        <h4 class="modal-title">Armazém</h4>
    </div>
    <div class="modal-body">
      <div class="d-flex flex-row ms-5">
        <img src="${userInfo.image}" class="img-fluid">
        <p class="ms-5 align-self-center">${userInfo.username}</p>
      </div>
      <div class="d-flex flex-column mt-5 ms-5">
        <p class="ms-5">Sala: 2</p>
        <p class="ms-5">Desafios: ${userInfo.challenges.length}/8</p>
        <p class="ms-5">Pins: ${userInfo.pins}</p>
      </div> 
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
    </div>
      `;
  };

  document.querySelector('#variableModal .modal-content').innerHTML = result
  $('#variableModal').modal('show');
};

function renderDoorModal() {
  let userInfo = getUserLogged();
  let result = '';
  if (userInfo.challenges.length < 4) {
    result = `
    <div class="modal-header">
      <h4 class="modal-title">Porta trancada</h4>
    </div>
    <div class="modal-body text-center">
      <p>Infelizmente a porta está trancada.<br>Resolve os desafios corretamente para conseguires abrir a porta!</p>
      <img src="../assets/img_modal/sadness.png" class="img-fluid">
    </div>
    `;
  } else if (userInfo.challenges.length === 4 && location.href.includes('jogar_1.html')) {
    result = `
    <div class="modal-header">
      <h4 class="modal-title">Porta destrancada</h4>
    </div>
    <div class="modal-body text-center">
      <p>Parabéns! Conseguiste completar a primeira sala e, como recompensa, desbloqueaste um avatar.<br>Continua a resolver desafios para ganhar mais! </p>
      <img src="../assets/avatares/${avatares[5]}" class="img-fluid mt-3">
    </div>
    `;
  } else if (userInfo.challenges.length >= 4 && userInfo.challenges.length < 8) {
    let userCode = Room.getUserCode()
    result = `
    <div class="modal-header">
      <h4 class="modal-title">Porta trancada</h4>
    </div>
    <div class="modal-body text-center">
      <p>Infelizmente a porta está trancada. <br>Resolve os desafios que se encontram espalhados pela sala para descobrires o código secreto.</p>
      <div class="code d-flex flex-row justify-content-evenly mt-5">
        <div class="code-digit">${userCode[0]}</div>
        <div class="code-digit">${userCode[1]}</div>
        <div class="code-digit">${userCode[2]}</div>
        <div class="code-digit">${userCode[3]}</div>
      </div>
    </div>
    `;
  } else if (userInfo.challenges.length === 8) {
    let roomCode = Room.getRoomCode()
    result = `
    <div class="modal-header">
      <h4 class="modal-title">Porta destrancada</h4>
    </div>
    <div class="modal-body text-center">
      <p>Parabéns! Descobriste o código secreto. <br>Podes finalmente sair do universo animado da Disney e da Pixar! </p>
      <div class="code d-flex flex-row justify-content-evenly mt-5">
        <div class="code-digits">${roomCode[0]}</div>
        <div class="code-digits">${roomCode[1]}</div>
        <div class="code-digits">${roomCode[2]}</div>
        <div class="code-digits">${roomCode[3]}</div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" id="btnDismiss" class="btn btnClose border-0">Fechar</button>
    </div>
    `;

    sessionStorage.removeItem('hasOpenedModal1');
    sessionStorage.removeItem('hasOpenedModal2');
  }
  if (userInfo.challenges.length < 8) {
    result += `
    <div class="modal-footer">
      <button type="button" id="btnDismiss" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
    </div>
    `
  }

  document.querySelector('#variableModal .modal-content').innerHTML = result
  $('#variableModal').modal('show');

  if (((userInfo.challenges.length === 4 && location.href.includes('jogar_1.html')) || userInfo.challenges.length === 8)) {
    document.querySelector('#btnDismiss').addEventListener('click', () => {
      if (userInfo.challenges.length === 8) {
        let result = ''
        if (userInfo.pins === 8) {
          result += `
          <div class="modal-header">
            <h4 class="modal-title">Pins encontrados</h4>
          </div>
          <div class="modal-body text-center">
            <p>Fantástico! Conseguiste encontrar todos os meus pins. <br>Já posso partir na minha próxima aventura. Obrigado!</p>
            <img src="../assets/img_modal/russell2.png" class="img-fluid mt-3">
          </div>
          `
        } else {
          result += `
          <div class="modal-header">
            <h4 class="modal-title">Pins perdidos</h4>
          </div>
          <div class="modal-body text-center">
            <p>É pena que não tenhas conseguido encontrar todos os meus pins, mas obrigado na mesma. <br>Vou continuar à procura.</p>
            <img src="../assets/img_modal/russell1.png" class="img-fluid mt-3">
          </div>
          `
        }
        result += `
        <div class="modal-footer">
          <button type="button" id="btnDismiss" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
        </div>
        `

        document.querySelector('#variableModal .modal-content').innerHTML = result
        $('#variableModal').modal('show');

        document.querySelector('#btnDismiss').addEventListener('click', () => {
          Room.deleteRoomCodes();
          location.href = "menu.html"
          sessionStorage.removeItem('goneTime');
          sessionStorage.removeItem('remainingTime');
        })
      } else {
        location.href = "jogar_2.html";
      }
      let users = getUsers()
      let userIndex = users.findIndex(user => user.username === userInfo.username)
      users[userIndex] = userInfo
      localStorage.setItem('users', JSON.stringify(users))
    })
  }
};

function renderModalBlocked() {
  let result = `
    <div class="modal-header">
      <h4 class="modal-title">Desafio bloqueado</h4>
    </div>
    <div class="modal-body text-center">
      <p>Esse desafio está bloqueado!
        <br>Continua a explorar a sala para o desbloquear.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Fechar</button>
    </div>
  `
  document.querySelector('#variableModal .modal-content').innerHTML = result
  $('#variableModal').modal('show');
}

export function renderProgressBar() {
  const progressBar = document.querySelector('.progress-bar');

  if (location.href.includes('jogar_1.html')) {
    progressBar.style.backgroundColor = '#6E9CD2';
  } else if (location.href.includes('jogar_2.html')) {
    progressBar.style.backgroundColor = '#D1C6E2';
  }

  let userInfo = getUserLogged();
  
  if (userInfo.challenges.length === 1 || userInfo.challenges.length === 5) {
    progressBar.style.width = '25%';
  } else if (userInfo.challenges.length === 2 || userInfo.challenges.length === 6) {
    progressBar.style.width = '50%';
  } else if (userInfo.challenges.length === 3 || userInfo.challenges.length === 7) {
    progressBar.style.width = '75%';
  } else if (userInfo.challenges.length === 4 || userInfo.challenges.length === 8) {
    progressBar.style.width = '100%';
  };

  if (location.href.includes('jogar_2.html') && userInfo.challenges.length === 4) {
    progressBar.style.width = '0%';
  }
};
renderProgressBar();