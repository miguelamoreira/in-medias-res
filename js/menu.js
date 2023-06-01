import {isLogged} from "./model/user_model.js"

document.querySelector("#btnLogin").addEventListener("click", () => {
  if (isLogged()) {
    location.href = "perfil_aluno.html";
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
    location.href = "jogar_1.html";
  })
  