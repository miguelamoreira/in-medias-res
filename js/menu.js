import {isLogged, getUserLogged} from "./model/user_model.js"

if (isLogged()) {
  document.querySelector('#txtLogin').innerHTML = 'PERFIL';
} else {
  document.querySelector('#txtLogin').innerHTML = 'LOGIN';
}

document.querySelector("#btnLogin").addEventListener("click", () => {
  if (isLogged()) {
    const btnPerfil = document.getElementById('txtLogin');
    const userInfo = getUserLogged();
    if (userInfo.type === 'Aluno') {
      location.href = "perfil_aluno.html";
    } else if (userInfo.type === 'Professor') {
      location.href = "perfil_professor.html";
    }
  } else {
    location.href = "inicio_sessao.html";
  }
  })
  
document.querySelector("#btnTutorial").addEventListener("click", () => {
  location.href = "como_jogar.html";
})
  
document.querySelector("#btnLeaderboard").addEventListener("click", () => {
  location.href = "leaderboard.html";
})
  
document.querySelector("#btnPlay").addEventListener("click", () => {
  if (isLogged()) {
    location.href = "jogar_1.html";
  } else {
    alert('Precisa de estar autenticado para poder jogar!');
  }
})
  